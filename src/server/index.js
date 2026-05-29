// server/index.js

import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import uploadRoute from "./routes/upload.js";
import deleteRoute from "./routes/delete.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use("/upload", uploadRoute);
app.use("/delete", deleteRoute);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
