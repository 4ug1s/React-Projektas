import cors from "cors";
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();

const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/users");

app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Serveris veikia ant ${PORT}`));
