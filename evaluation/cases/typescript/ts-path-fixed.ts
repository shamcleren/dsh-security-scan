import path from "node:path";
const ROOT = "/srv/reports";
app.get("/reports/:name", (req: any, res: any) => {
  res.sendFile(path.basename(req.params.name), { root: ROOT });
});
