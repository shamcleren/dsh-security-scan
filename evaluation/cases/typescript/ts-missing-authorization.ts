router.delete("/projects/:id", async (req: any, res: any) => {
  await projects.deleteOne({ id: req.params.id });
  res.status(204).end();
});
