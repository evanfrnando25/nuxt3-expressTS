import express, { Request, Response } from "express";
import dotenv from "dotenv";
import router from "./routes/Routes";
import cors from "cors";
import path from "path";

dotenv.config();

const app = express();
app.use(
  cors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

app.use("/uploads", express.static(path.join(__dirname, "../uploads")));
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  return res.status(200).send({
    response: "express typescript",
  });
});

app.use(router);

app.listen(process.env.APP_PORT, () => {
  console.log(`${process.env.APP_NAME}running on port ${process.env.APP_PORT}`);
});
