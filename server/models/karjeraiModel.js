// server/models/karjeraiModel.js
const db = require("../config/db");

// Gauti visus karjerus
const getAllKarjerai = async () => {
    try {
        const [rows] = await db.query("SELECT * FROM karjerai");
        return rows;
    } catch (err) {
        throw new Error("Nepavyko gauti karjerų: " + err.message);
    }
};

// Gauti karjerą pagal ID
const getKarjerasById = async (id) => {
    try {
        const [rows] = await db.query("SELECT * FROM karjerai WHERE id = ?", [id]);
        return rows[0];  // Grąžiname pirmą eilutę, nes tikimasi, kad ID bus unikalus
    } catch (err) {
        throw new Error("Nepavyko gauti karjero pagal ID: " + err.message);
    }
};

// Sukurti karjerą
const createKarjeras = async (data) => {
    const {
        karjero_pavadinimas,
        imones_pavadinimas,
        imones_kodas,
        pvm_kodas,
        karjero_adresas,
        imones_adresas,
        koordinatės_X,
        koordinatės_Y,
        atstumas_iki_bazes,
    } = data;

    try {
        const [result] = await db.query(
            `INSERT INTO karjerai 
            (karjero_pavadinimas, imones_pavadinimas, imones_kodas, pvm_kodas, karjero_adresas, imones_adresas, koordinatės_X, koordinatės_Y, atstumas_iki_bazes) 
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [
                karjero_pavadinimas,
                imones_pavadinimas,
                imones_kodas,
                pvm_kodas,
                karjero_adresas,
                imones_adresas,
                koordinatės_X,
                koordinatės_Y,
                atstumas_iki_bazes,
            ]
        );

        return result.insertId;
    } catch (err) {
        throw new Error("Nepavyko sukurti karjero: " + err.message);
    }
};

// Atnaujinti karjerą
const updateKarjeras = async (id, data) => {
    try {
        const [result] = await db.query(
            `UPDATE karjerai SET ? WHERE id = ?`,
            [data, id]
        );

        // Jei result.affectedRows yra 0, tai reiškia, kad įrašas nebuvo atnaujintas
        if (result.affectedRows === 0) {
            throw new Error("Karjeras su tokiu ID nerastas");
        }

        return result;
    } catch (err) {
        throw new Error("Nepavyko atnaujinti karjero: " + err.message);
    }
};

// Ištrinti karjerą
const deleteKarjeras = async (id) => {
    try {
        const [result] = await db.query("DELETE FROM karjerai WHERE id = ?", [id]);

        // Jei result.affectedRows yra 0, tai reiškia, kad įrašas nebuvo ištrintas
        if (result.affectedRows === 0) {
            throw new Error("Karjeras su tokiu ID nerastas");
        }

        return result;
    } catch (err) {
        throw new Error("Nepavyko ištrinti karjero: " + err.message);
    }
};

module.exports = {
    getAllKarjerai,
    getKarjerasById,
    createKarjeras,
    updateKarjeras,
    deleteKarjeras,
};
