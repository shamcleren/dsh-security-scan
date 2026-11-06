import fs from "node:fs";
import path from "node:path";
const ROOT = "/srv/reports";
app.get("/reports/:name", (req: any, res: any) => {
  fs.createReadStream(path.join(ROOT, req.params.name)).pipe(res);
});
