import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  res.render("pages/index");
});

router.get("/about", (req, res) => {
  res.render("pages/about");
});

router.get("/html/product", (req, res) => {
  let family: string | undefined;

  if (typeof req.query.family === "string") {
    family = req.query.family;
  }

  res.render("pages/product", {
    family,
  });
})

export default router;
