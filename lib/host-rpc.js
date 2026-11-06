import { clientRequestSchema } from '@deepseek-ai/dsh-client-connection';
const MAX_BODY_BYTES = 1024 * 1024;
/** Register a custom Connection-compatible channel on the consuming plugin fiber. */
export function registerHostRpc(ctx, channel, handler) {
    ctx.effect(() => ctx.webServer.register({
        kind: 'prefix',
        path: channel,
        handler: (request, response) => serveRpc(ctx, channel, handler, request, response),
    }), `host-rpc: ${channel}`);
}
async function serveRpc(ctx, channel, handler, request, response) {
    const admission = ctx.connection.admit(request);
    if ('rejection' in admission)
        return send(response, admission.rejection, admission.rejection === 401 ? 'unauthorized' : 'forbidden');
    const endpoint = endpointFrom(channel, request.url);
    if (request.method !== 'POST' || endpoint === undefined)
        return send(response, 404, 'not found');
    if (request.headers['content-type']?.split(';', 1)[0]?.trim().toLowerCase() !== 'application/json')
        return send(response, 415, 'content type must be application/json');
    const body = await readBody(request, response);
    if (body === undefined)
        return;
    let decoded;
    try {
        decoded = JSON.parse(body);
    }
    catch {
        return send(response, 400, 'body is not JSON');
    }
    const envelope = clientRequestSchema.safeParse(decoded);
    if (!envelope.success)
        return sendJson(response, 400, rpcResponse(rpcIdFrom(decoded), { ok: false, error: { code: 'gateway/bad-request', message: 'invalid client-request message', details: { issues: envelope.error.issues } } }));
    if (envelope.data.method !== endpoint)
        return sendJson(response, 200, rpcResponse(envelope.data.rpcId, { ok: false, error: { code: 'gateway/bad-request', message: 'method does not match endpoint', details: { issues: [] } } }));
    const abort = new AbortController();
    request.once('aborted', () => abort.abort());
    try {
        sendJson(response, 200, rpcResponse(envelope.data.rpcId, await handler(endpoint, envelope.data.payload, abort.signal, admission.peer)));
    }
    catch (error) {
        send(response, 500, `handler failure: ${String(error)}`);
    }
}
async function readBody(request, response) {
    const chunks = [];
    let size = 0;
    for await (const chunk of request) {
        const bytes = Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk);
        size += bytes.length;
        if (size > MAX_BODY_BYTES) {
            send(response, 413, 'request body too large');
            return;
        }
        chunks.push(bytes);
    }
    return Buffer.concat(chunks).toString('utf8');
}
function endpointFrom(channel, rawUrl) {
    if (!rawUrl)
        return;
    const pathname = new URL(rawUrl, 'http://localhost').pathname;
    if (!pathname.startsWith(channel + '/'))
        return;
    const endpoint = pathname.slice(channel.length + 1);
    if (!endpoint || endpoint.split('/').some(segment => !/^[A-Za-z0-9_$.-]+$/.test(segment)))
        return;
    return endpoint;
}
function rpcIdFrom(value) {
    return typeof value === 'object' && value !== null && typeof Reflect.get(value, 'rpcId') === 'string'
        ? Reflect.get(value, 'rpcId')
        : 'invalid-request';
}
function rpcResponse(rpcId, result) {
    return { type: 'server-response', rpcId, result };
}
function send(response, status, body) {
    response.writeHead(status, { 'content-type': 'text/plain; charset=utf-8' });
    response.end(body);
}
function sendJson(response, status, body) {
    response.writeHead(status, { 'content-type': 'application/json; charset=utf-8' });
    response.end(JSON.stringify(body));
}
