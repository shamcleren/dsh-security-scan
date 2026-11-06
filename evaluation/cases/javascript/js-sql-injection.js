app.get("/users", async (req, res) => {
  res.json(await db.query("SELECT * FROM users WHERE id = " + req.query.id));
});
