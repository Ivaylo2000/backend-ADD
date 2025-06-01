import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import itemsRouter from "../routes/itemsRouter";
import { errorHandler } from "../middleware/error";
import path from "path";
const app = express();
const port = 8000;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "..", "public")));

app.use("/", itemsRouter);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
