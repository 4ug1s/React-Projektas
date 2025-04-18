const db = require("../config/db");

async function createUser(name, email, passwordHash) {
    const [rows] = await db.execute(
        "INSERT INTO users (name, email, password) VALUES (?, ?, ?)",
        [name, email, passwordHash]
    );
    return rows;
}

async function findUserByEmail(email) {
    const [rows] = await db.execute("SELECT * FROM users WHERE email = ?", [email]);
    return rows[0];
}

module.exports = { createUser, findUserByEmail };
