// server/controllers/karjeraiController.js
const karjeraiModel = require("../models/karjeraiModel");

const getAll = async (req, res) => {
    try {
        const data = await karjeraiModel.getAllKarjerai();
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: "Serverio klaida" });
    }
};

const getById = async (req, res) => {
    try {
        const karjeras = await karjeraiModel.getKarjerasById(req.params.id);
        if (!karjeras) return res.status(404).json({ message: "Nerasta" });
        res.json(karjeras);
    } catch (err) {
        res.status(500).json({ error: "Serverio klaida" });
    }
};

const create = async (req, res) => {
    try {
        const insertId = await karjeraiModel.createKarjeras(req.body);
        res.status(201).json({ message: "Sukurta", id: insertId });
    } catch (err) {
        res.status(500).json({ error: "Klaida kuriant karjerą" });
    }
};

const update = async (req, res) => {
    try {
        const karjeras = await karjeraiModel.getKarjerasById(req.params.id);  // Patikriname, ar karjeras egzistuoja
        if (!karjeras) {
            return res.status(404).json({ message: "Karjeras nerastas" });
        }

        // Jei karjeras egzistuoja, atnaujiname
        await karjeraiModel.updateKarjeras(req.params.id, req.body);
        res.json({ message: "Atnaujinta" });
    } catch (err) {
        res.status(500).json({ error: "Klaida atnaujinant" });
    }
};

const remove = async (req, res) => {
    try {
        const karjeras = await karjeraiModel.getKarjerasById(req.params.id);  // Patikriname, ar karjeras egzistuoja prieš ištrindami
        if (!karjeras) {
            return res.status(404).json({ message: "Karjeras nerastas" });
        }

        await karjeraiModel.deleteKarjeras(req.params.id);
        res.json({ message: "Ištrinta" });
    } catch (err) {
        res.status(500).json({ error: "Klaida trinant" });
    }
};

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove,
};
