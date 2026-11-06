import fs from "node:fs/promises";
import path from "node:path";
const ROOT = "/srv/reports";
app.get("/reports/:name", async (req: any, res: any) => {
  const target = path.resolve(ROOT, req.params.name);
  if (!target.startsWith(ROOT + path.sep)) { return res.status(400).end(); }
  res.send(await fs.readFile(target));
});
