const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { createUser, findUserByEmail } = require("../models/userModel");

exports.register = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const existing = await findUserByEmail(email);
        if (existing) {
            return res.status(400).json({ message: "El. paštas jau naudojamas" });
        }

        const hash = await bcrypt.hash(password, 10);
        await createUser(name, email, hash);
        res.status(201).json({ message: "Registracija sėkminga" });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Serverio klaida" });
    }
};

exports.login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await findUserByEmail(email);
        if (!user) {
            return res.status(400).json({ message: "Neteisingas el. paštas arba slaptažodis" });
        }

        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(400).json({ message: "Neteisingas el. paštas arba slaptažodis" });
        }

        const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
            expiresIn: "1d",
        });

        res.json({ token });
    } catch (err) {
        res.status(500).json({ message: "Serverio klaida" });
    }
};
