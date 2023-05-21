import express from "express";
import router from "./routes/routes.js";
import cors from "cors";
import mongoose from "mongoose";

const app = express();
const PORT = 8000;
app.use(cors());
app.use("/", router);

mongoose
  .connect("mongodb+srv://ferozkhalil:feroz5675@cluster0.gazk0yl.mongodb.net/")
  .then(() => {
    console.log("connection successfull");
  })
  .catch((e) => {
    console.log(e);
  });

app.listen(8000, () => {
  console.log("Listning to the port 800");
});
