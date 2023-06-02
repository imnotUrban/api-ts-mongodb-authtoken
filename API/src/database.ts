import mongoose from "mongoose";

mongoose
  .connect(process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/test", {})
  .then((db) => console.log("Base de datos conectada"))
  .catch((err) => console.log(err));
