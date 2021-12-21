import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const URI = process.env.URI;
const dbConnection = async () => {
  if (!URI)
    return console.log(
      "[DB Connection] URI is undefined please set it on .env"
    );
  await mongoose
    .connect(URI)
    .then(() => {
      console.log("[DB] Conected");
    })
    .catch((err) => {
      console.error("[DB ERROR]" + err);
    });
};

export default dbConnection;
