const axios = require("axios");
router.post("/webhooks/test", async (ctx) => {
  const response = await axios.post(ctx.request.body.callbackUrl, { ping: true });
  ctx.body = { status: response.status };
});
