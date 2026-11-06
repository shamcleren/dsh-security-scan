const ALLOWED_HOSTS = new Set(["api.example.com"]);
app.get("/proxy", async (req, res) => {
  const target = new URL(req.query.url);
  if (!ALLOWED_HOSTS.has(target.hostname) || target.protocol !== "https:") return res.status(400).end();
  res.send(await (await fetch(target)).text());
});
