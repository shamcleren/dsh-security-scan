app.get("/fetch", async (req: any, res: any) => {
  const response = await fetch(req.query.url);
  res.send(await response.text());
});
