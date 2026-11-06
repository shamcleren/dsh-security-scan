const child_process = require("child_process");
function handle(req) { return child_process.spawn("echo", [req.query.message], {shell: false}); }
