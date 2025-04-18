"use client";

import { useState } from "react";
import Link from "next/link";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const res = await fetch("http://localhost:5000/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || "Prisijungimo klaida");
            }

            localStorage.setItem("token", data.token); // galėsi naudoti apsaugotiems puslapiams
            alert("Prisijungimas sėkmingas");
            window.location.href = "/dashbord"; // arba naudok Next.js router push
        } catch (err: any) {
            alert("Klaida: " + err.message);
        }
    };


    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
            <div className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
                <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
                    Prisijungimas
                </h1>

                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            El. paštas
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Slaptažodis
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="mt-1 block w-full border border-gray-300 rounded-lg p-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
                    >
                        Prisijungti
                    </button>
                </form>

                <p className="text-center text-sm text-gray-600 mt-6">
                    Neturi paskyros?{" "}
                    <Link href="/register" className="text-blue-600 hover:underline">
                        Registruotis
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default LoginPage;
