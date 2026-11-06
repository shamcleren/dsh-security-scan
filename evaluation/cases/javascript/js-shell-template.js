const child_process = require("child_process");
app.post("/git/log", (req, res) => {
  child_process.exec(`git log --oneline ${req.body.ref}`, (error, stdout) => res.send(stdout));
});
