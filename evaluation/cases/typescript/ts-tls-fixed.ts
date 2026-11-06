const https = require("https");
function retrieve() { return https.get("https://service.invalid", {rejectUnauthorized: true}); }
