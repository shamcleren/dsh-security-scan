app.get("/fetch", async (req: any, res: any) => {
  const response = await fetch("https://api.example.com/items/" + encodeURIComponent(req.query.id));
  res.send(await response.text());
});
