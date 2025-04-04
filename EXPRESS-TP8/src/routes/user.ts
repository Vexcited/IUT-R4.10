import { Router } from "express";
import { requestAPI } from "../api/request";
const router = Router();

/**
 * @route /?login=...
 * @route /?email=...
 * @route /?email=...&login=...
 */
router.get("/", async (req, res) => {
  const email = req.query.email;
  const login = req.query.login;

  const json = await requestAPI("GET", "/sec/user") as Array<{
    login: string
    email: string
    name: string
    password: string
  }>

  if (typeof email === "string" && typeof login === "string") {
    res.json(json.filter((user) => {
      return user.login === login && user.email === email;
    }));

    return;
  }

  if (typeof email === "string") {
    res.json(json.filter((user) => {
      return user.email === email;
    }));

    return;
  }
  if (typeof login === "string") {
    res.json(json.filter((user) => {
      return user.login === login;
    }));

    return;
  }

  res.json(json);
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;

  const json = await requestAPI("GET", `/sec/user/${id}`);
  res.json(json);
});

router.put("/", async (req, res) => {
  const { login, email, password, name } = req.body as {
    login: string
    email: string
    password: string
    name?: string
  }

  if (typeof login !== "string" || typeof email !== "string" || typeof password !== "string") {
    res.status(400);
    res.json({ error: "Missing parameters" });
    return;
  }

  const existing = await requestAPI("GET", "/sec/user") as Array<{
    login: string
    email: string
    name: string
  }>

  // email et login doivent être uniques
  if (existing.find((user) => user.login === login) || existing.find((user) => user.email === email)) {
    res.status(400);
    res.json({ error: "User already exists" });
    return;
  }

  const created = await requestAPI("POST", "/sec/user", {
    login,
    email,
    name,
    password
  });

  res.json(created);
});

router.patch("/:id", async (req, res) => {
  const id = req.params.id;

  const { password, name } = req.body as {
    password?: string
    name?: string
  }

  const patched = await requestAPI("PATCH", `/sec/user/${id}`, {
    name,
    password
  });

  res.json(patched);
});

router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  await requestAPI("DELETE", `/sec/user/${id}`);
  res.status(204);
});

export default router;
