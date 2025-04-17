const mysql = require("mysql2/promise");
require("dotenv").config();

const {
    DB_HOST = "localhost",
    DB_USER = "root",
    DB_PASSWORD = "password",
    DB_NAME = "algintra1",
} = process.env;

// Funkcija sukuria DB ir lentelę, jei jų nėra
async function initializeDatabase() {
    // Prisijungiame prie MySQL be DB
    const connection = await mysql.createConnection({
        host: DB_HOST,
        user: DB_USER,
        password: DB_PASSWORD,
    });

    // Sukuriam duomenų bazę jei jos nėra
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${DB_NAME}\``);
    await connection.end();

    // Sukuriam prisijungimą prie DB
    const pool = mysql.createPool({
        host: DB_HOST,
        user: DB_USER,
        password: DB_PASSWORD,
        database: DB_NAME,
        waitForConnections: true,
        connectionLimit: 10,
    });

    // Sukuriam lentele, jei jos nėra
    const createTableQuery = `
        CREATE TABLE IF NOT EXISTS users (
                                             id INT AUTO_INCREMENT PRIMARY KEY,
                                             name VARCHAR(100),
            email VARCHAR(191) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            )
    `;

    await pool.query(createTableQuery);

    console.log("✅ DB ir lentele paruoštos");
    return pool;
}

const poolPromise = initializeDatabase();
module.exports = poolPromise;
