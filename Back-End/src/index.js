import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import routes from "./routes";
dotenv.config();
const app = express();

const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json({ message: "Notes Api" });
});

routes(app);

app.listen(PORT, () => {
  console.log("[Server] Listening on port " + PORT);
});
