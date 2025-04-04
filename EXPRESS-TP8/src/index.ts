import express from "express";
import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import path from "node:path";
import layouts from "express-ejs-layouts";
dotenv.config();

import userRouter from "./routes/user";
import productRouter from "./routes/product";
import frontendRouter from "./routes/frontend";
import testimonyRouter from "./routes/testimony";

const app = express();
app.set("view engine", "ejs");
app.set("views", path.join(import.meta.dirname, "views"));

app.use(layouts);
app.set("layout", "layouts/main");

app.use(morgan("combined"))
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(import.meta.dirname, "..", "public")));

app.use(frontendRouter);
app.use("/user", userRouter);
app.use("/product", productRouter);
app.use("/testimony", testimonyRouter);

app.use((req, res) => {
  res.status(404);
  res.json({ error: `${req.method} ${req.originalUrl} : NOT FOUND` });
});

app.listen(process.env.PORT, () => {
  console.info(`Listening on port ${process.env.PORT}.`);
});
