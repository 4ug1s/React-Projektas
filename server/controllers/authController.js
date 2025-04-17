const db = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(400).json({ message: "Visi laukai yra privalomi." });
    }

    try {
        // Patikrinam ar vartotojas jau egzistuoja
        const [existing] = await db.query("SELECT * FROM users WHERE email = ?", [email]);
        if (existing.length > 0) {
            return res.status(409).json({ message: "Vartotojas jau egzistuoja." });
        }

        // Slaptažodžio šifravimas
        const hashed = await bcrypt.hash(password, 10);

        await db.query("INSERT INTO users (name, email, password) VALUES (?, ?, ?)", [
            name,
            email,
            hashed,
        ]);

        res.status(201).json({ message: "Vartotojas sukurtas sėkmingai!" });
    } catch (err) {
        console.error("Registracijos klaida:", err);
        res.status(500).json({ message: "Serverio klaida." });
    }
};


const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const pool = await db;
        const [users] = await pool.query("SELECT * FROM users WHERE email = ?", [email]);
        if (users.length === 0) return res.status(400).json({ message: "Netinkamas el. paštas" });

        const user = users[0];
        const valid = await bcrypt.compare(password, user.password);
        if (!valid) return res.status(401).json({ message: "Neteisingas slaptažodis" });

        const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
            expiresIn: "1d",
        });

        res.json({ token, user: { id: user.id, name: user.name, email: user.email } });
    } catch (err) {
        console.error("Login error:", err);
        res.status(500).json({ message: "Serverio klaida", error: err });
    }
};

module.exports = { register, login };
