import { Router } from "express";
const router = Router();

/**
 * @route /?family=...
 * @route /?title=...
 * @route /?family=...&title=...
 */
router.get("/", async (req, res) => {
  const url = new URL(process.env.KAZABURGER_API_URL + "/product");
  const family = req.query.family;
  const title = req.query.title;

  if (typeof family === "string") {
    url.searchParams.append("family", family);
  }
  if (typeof title === "string") {
    url.searchParams.append("title", title);
  }

  const response = await fetch(url);
  const json = await response.json();
  res.json(json);
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const url = new URL(process.env.KAZABURGER_API_URL + "/product/" + id);

  const response = await fetch(url);
  const json = await response.json();

  const data = json[0];
  if (data) {
    res.json(data);
  }
  else {
    res.status(404);
    res.json({ error: `Product ${id} not found` });
  }
});

export default router;
