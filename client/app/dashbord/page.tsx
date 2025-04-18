"use client"; // Užtikriname, kad komponentas yra kliento pusėje

import { useState, useEffect } from "react";
import Link from "next/link";

const Dashboard = () => {
    const [karjerai, setKarjerai] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editingKarjeras, setEditingKarjeras] = useState(null);  // Redagavimo būsenos stebėjimas
    const [formData, setFormData] = useState({
        karjero_pavadinimas: "",
        imones_pavadinimas: "",
        karjero_adresas: "",
        koordinates_X: "",
        koordinates_Y: "",
        atstumas_iki_bazes: ""
    });

    useEffect(() => {
        const fetchKarjerai = async () => {
            try {
                const response = await fetch("http://localhost:5000/api/karjerai");
                if (!response.ok) throw new Error("Nepavyko gauti duomenų");
                const data = await response.json();
                setKarjerai(data);
            } catch (error) {
                console.error("Klaida gaunant karjerus:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchKarjerai();
    }, []);

    const handleEdit = (karjeras) => {
        setEditingKarjeras(karjeras);  // Nustatome, kuris karjeras yra redaguojamas
        setFormData({
            karjero_pavadinimas: karjeras.karjero_pavadinimas,
            imones_pavadinimas: karjeras.imones_pavadinimas,
            karjero_adresas: karjeras.karjero_adresas,
            koordinates_X: karjeras.koordinates_X,
            koordinates_Y: karjeras.koordinates_Y,
            atstumas_iki_bazes: karjeras.atstumas_iki_bazes
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSave = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/karjerai/${editingKarjeras.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) throw new Error("Pakeitimai nepavyko");

            const updatedKarjeras = await response.json();
            setKarjerai((prev) =>
                prev.map((karjeras) =>
                    karjeras.id === updatedKarjeras.id ? updatedKarjeras : karjeras
                )
            );
            setEditingKarjeras(null);  // Išjungiame redagavimo režimą
            window.location.reload(); // Atnaujiname puslapį
        } catch (error) {
            console.error("Klaida išsaugant pakeitimus:", error);
        }
    };

    const handleDelete = async (id: number) => {
        const confirmDelete = window.confirm("Ar tikrai norite ištrinti?");
        if (!confirmDelete) return;

        try {
            const response = await fetch(`http://localhost:5000/api/karjerai/${id}`, {
                method: "DELETE",
            });

            if (!response.ok) throw new Error("Ištrynimas nepavyko");

            setKarjerai((prev) => prev.filter((karjeras) => karjeras.id !== id));
        } catch (error) {
            console.error("Klaida trinant karjerą:", error);
        }
    };

    return (
        <main className="bg-gray-50">
            <section className="py-16">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-8">Karjerų Valdymas</h2>



                    {loading ? (
                        <p>Įkeliama...</p>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="min-w-full table-auto">
                                <thead>
                                <tr className="bg-gray-200">
                                    <th className="px-4 py-2">Pavadinimas</th>
                                    <th className="px-4 py-2">Įmonės pavadinimas</th>
                                    <th className="px-4 py-2">Adresas</th>
                                    <th className="px-4 py-2">Koordinatės</th>
                                    <th className="px-4 py-2">Atstumas</th>
                                    <th className="px-4 py-2">Veiksmai</th>
                                </tr>
                                </thead>
                                <tbody>
                                {karjerai.map((karjeras) => (
                                    <tr key={karjeras.id} className="border-b">
                                        <td className="px-4 py-2">{karjeras.karjero_pavadinimas}</td>
                                        <td className="px-4 py-2">{karjeras.imones_pavadinimas}</td>
                                        <td className="px-4 py-2">{karjeras.karjero_adresas}</td>
                                        <td className="px-4 py-2">
                                            {karjeras.koordinates_X}, {karjeras.koordinates_Y}
                                        </td>
                                        <td className="px-4 py-2">
                                            {karjeras.atstumas_iki_bazes} km
                                        </td>
                                        <td className="px-4 py-2">
                                            <button
                                                onClick={() => handleEdit(karjeras)}
                                                className="text-blue-600 hover:underline mr-4"
                                            >
                                                Redaguoti
                                            </button>
                                            <button
                                                onClick={() => handleDelete(karjeras.id)}
                                                className="text-red-600 hover:underline"
                                            >
                                                Ištrinti
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>

                            {/* Redagavimo forma */}
                            {editingKarjeras && (
                                <div className="mt-8 p-4 border bg-white shadow-lg rounded-md">
                                    <h3 className="text-2xl mb-4">Redaguoti Karjerą</h3>
                                    <form>
                                        <div className="mb-4">
                                            <label className="block text-left">Pavadinimas</label>
                                            <input
                                                type="text"
                                                name="karjero_pavadinimas"
                                                value={formData.karjero_pavadinimas}
                                                onChange={handleInputChange}
                                                className="w-full p-2 border border-gray-300 rounded"
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label className="block text-left">Įmonės Pavadinimas</label>
                                            <input
                                                type="text"
                                                name="imones_pavadinimas"
                                                value={formData.imones_pavadinimas}
                                                onChange={handleInputChange}
                                                className="w-full p-2 border border-gray-300 rounded"
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label className="block text-left">Adresas</label>
                                            <input
                                                type="text"
                                                name="karjero_adresas"
                                                value={formData.karjero_adresas}
                                                onChange={handleInputChange}
                                                className="w-full p-2 border border-gray-300 rounded"
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label className="block text-left">Koordinatės X</label>
                                            <input
                                                type="text"
                                                name="koordinates_X"
                                                value={formData.koordinates_X}
                                                onChange={handleInputChange}
                                                className="w-full p-2 border border-gray-300 rounded"
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label className="block text-left">Koordinatės Y</label>
                                            <input
                                                type="text"
                                                name="koordinates_Y"
                                                value={formData.koordinates_Y}
                                                onChange={handleInputChange}
                                                className="w-full p-2 border border-gray-300 rounded"
                                            />
                                        </div>
                                        <div className="mb-4">
                                            <label className="block text-left">Atstumas</label>
                                            <input
                                                type="text"
                                                name="atstumas_iki_bazes"
                                                value={formData.atstumas_iki_bazes}
                                                onChange={handleInputChange}
                                                className="w-full p-2 border border-gray-300 rounded"
                                            />
                                        </div>

                                        <div className="mt-4">
                                            <button
                                                type="button"
                                                onClick={handleSave}
                                                className="bg-green-500 text-white py-2 px-6 rounded hover:bg-green-600"
                                            >
                                                Išsaugoti
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </section>
        </main>
    );
};

export default Dashboard;
