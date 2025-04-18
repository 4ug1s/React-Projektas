const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const authRoute = require("./routes/authRoutes");
const karjeraiRoute = require("./routes/karjeraiRoutes"); // <- atitinka failo pavadinimą

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// Autentifikacija
app.use("/api", authRoute);

// Karjera (pvz. /api/karjerai)
app.use("/api/karjerai", karjeraiRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Serveris veikia http://localhost:${PORT}`);
});
