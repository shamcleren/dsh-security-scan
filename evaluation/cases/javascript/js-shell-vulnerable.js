const child_process = require("child_process");
function handle(req) { return child_process.exec(req.query.command); }
