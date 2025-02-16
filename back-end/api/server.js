import express from "express";
import cors from "cors";
import { db } from "./connect.js";

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Só vai responder os endpoint '/artists' e '/songs'");
});

app.get("/artists", async (req, res) => {
  res.send(await db.collection("artists").find({}).toArray());
});

app.get("/songs", async (req, res) => {
  res.send(await db.collection("songs").find({}).toArray());
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
