"use client";

import { useState } from "react";
import Link from "next/link";

const RegisterPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();

        if (password !== confirm) {
            alert("Slaptažodžiai nesutampa!");
            return;
        }

        try {
            const res = await fetch("http://localhost:5000/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, email, password }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || "Registracijos klaida");
            }

            alert("Registracija sėkminga!");
            // Redirect jei norėsi:
            // router.push("/login")
        } catch (err: any) {
            console.error("Klaida registruojantis:", err.message);
            alert("Klaida: " + err.message);
        }
    };


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
                <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
                    Registracija
                </h1>

                <form onSubmit={handleRegister} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Vardas</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Pasirinkite vartotojo vardą"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">El. paštas</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Slaptažodis</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">Pakartokite slaptažodį</label>
                        <input
                            type="password"
                            value={confirm}
                            onChange={(e) => setConfirm(e.target.value)}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                        Registruotis
                    </button>
                </form>

                <p className="text-center text-sm text-gray-600 mt-6">
                    Jau turi paskyrą?{" "}
                    <Link href="/login" className="text-blue-600 hover:underline">
                        Prisijungti
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default RegisterPage;
