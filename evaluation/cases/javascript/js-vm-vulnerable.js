const vm = require("vm");
app.post("/calc", (req, res) => {
  res.json({ value: vm.runInNewContext(req.body.expression, {}) });
});
