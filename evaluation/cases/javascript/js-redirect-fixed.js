const DESTINATIONS = { orders: "/orders", profile: "/profile" };
app.get("/login/done", (req, res) => {
  res.redirect(DESTINATIONS[req.query.next] || "/");
});
