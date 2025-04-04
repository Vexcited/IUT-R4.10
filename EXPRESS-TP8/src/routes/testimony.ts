import { Router } from "express";
import { requestAPI } from "../api/request";
const router = Router();

/**
 * @route /?user=...
 * @route /?product=...
 * @route /?product=...&user=...
 */
router.get("/", async (req, res) => {
  const url = new URL(process.env.KAZABURGER_API_URL + "/testimony");
  const product = req.query.product;
  const user = req.query.user;

  const response = await fetch(url);
  const json = await response.json() as Array<{
    _id: string
    user: string
    product: {
      _id: string
      id: string
    }
  }>

  if (typeof product === "string" && typeof user === "string") {
    res.json(json.filter((testimony) => {
      return testimony.product._id === product && testimony.user === user;
    }));

    return;
  }

  if (typeof product === "string") {
    res.json(json.filter((testimony) => {
      return testimony.product._id === product;
    }));

    return;
  }
  if (typeof user === "string") {
    res.json(json.filter((testimony) => {
      return testimony.user === user;
    }));

    return;
  }

  res.json(json);
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const url = new URL(process.env.KAZABURGER_API_URL + "/testimony/" + id);

  const response = await fetch(url);
  const json = await response.json();
  res.json(json);
});

router.post("/", async (req, res) => {
  const body = req.body as Partial<{
    product: string
    rating: string | number
    review: string
    user: string
  }>;

  if (!body.product || !body.review || !body.user) {
    res.status(400);
    res.json({ error: "Missing parameters" });
    return;
  }

  if (typeof body.rating === "string") {
    const rating = parseInt(body.rating);
    body.rating = rating;
  }

  if (typeof body.rating !== "number") {
    res.status(400);
    res.json({ error: "Invalid rating" });
    return;
  }

  if (isNaN(body.rating)) {
    res.status(400);
    res.json({ error: "Invalid rating" });
    return;
  }

  const json = await requestAPI("POST", "/sec/testimony", body);
  res.json(json);
});

router.patch("/:id", async (req, res) => {
  const id = req.params.id;

  const body = req.body as Partial<{
    product: string
    rating: string | number
    review: string
    user: string
  }>;

  if (!body.product || !body.review || !body.user) {
    res.status(400);
    res.json({ error: "Missing parameters" });
    return;
  }

  if (typeof body.rating === "string") {
    const rating = parseInt(body.rating);
    body.rating = rating;
  }

  if (typeof body.rating !== "number") {
    res.status(400);
    res.json({ error: "Invalid rating" });
    return;
  }

  if (isNaN(body.rating) || body.rating < 0 || body.rating > 5) {
    res.status(400);
    res.json({ error: "Invalid rating" });
    return;
  }

  const json = await requestAPI("PATCH", `/sec/testimony/${id}`, body);
  res.json(json);
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  await requestAPI("DELETE", `/sec/testimony/${id}`);;
  res.status(204);
});

export default router;
