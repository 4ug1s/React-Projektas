"use client";

import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-white shadow-inner mt-12 border-t">
            <div className="container mx-auto px-6 py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Skiltis: Medžiagos */}
                <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                        <Link href="/medziagos">Medžiagos</Link>
                    </h3>
                    <ul className="space-y-2">
                        <li>
                            <Link href="/medziagos/juodzemis" className="text-gray-600 hover:text-blue-600">
                                Juodžemis
                            </Link>
                        </li>
                        <li>
                            <Link href="/medziagos/augalinis-gruntas" className="text-gray-600 hover:text-blue-600">
                                Augalinis gruntas
                            </Link>
                        </li>
                        <li>
                            <Link href="/medziagos/smelis-pamatu-uzpylimui" className="text-gray-600 hover:text-blue-600">
                                Smėlis pamatų užpylimui
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Skiltis: Medžiagos poskyriai */}
                <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">Paslaugos</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link href="/paslaugos/grunto-isvezas" className="text-gray-600 hover:text-blue-600">
                                Grunto išvežimas
                            </Link>
                        </li>
                        <li>
                            <Link href="/paslaugos/transporto-nuoma" className="text-gray-600 hover:text-blue-600">
                                Transporto nuoma
                            </Link>
                        </li>
                        <li>
                            <Link href="/paslaugos/medziagu-pristatymas" className="text-gray-600 hover:text-blue-600">
                                Medžiagų pristatymas
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Skiltis: Kainos skaičiuoklė */}
                <div className="flex flex-col items-start">
                    <h3 className="text-2xl font-extrabold text-gray-900 mb-4">
                        <Link href="/skaiciuokle">Kainos skaičiuoklė</Link>
                    </h3>
                    <p className="text-gray-600">
                        Pamatykite tikslias kainas ir gauti greitą pasiūlymą.
                    </p>
                </div>
            </div>
            <div className="bg-gray-100 py-2 mt-8">
                <div className="container mx-auto px-6 text-center text-sm text-gray-600">
                    © {new Date().getFullYear()} MB Algintra. Visos teisės saugomos.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
