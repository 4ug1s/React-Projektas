"use client";

import Link from "next/link";
import { useState } from "react";
import { ShoppingCartIcon, Bars3Icon } from "@heroicons/react/24/outline";

const Header = () => {
    const [cartTotal, setCartTotal] = useState(0);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prev) => !prev);
    };

    return (
        <>
            {/* Fiksuotas headeris */}
            <header className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
                <div className="container mx-auto flex justify-between items-center py-4 px-6">
                    {/* Logotipas */}
                    <Link href="/" className="text-2xl font-bold text-gray-900  hover: whitespace-nowrap">
                        MB Algintra
                    </Link>

                    {/* Navigacijos meniu – rodomas, jei telpa */}
                    <nav className="hidden lg:flex space-x-6 text-lg font-medium">
                        <Link href="/medziagos" className="hover:text-blue-600 ml-6">
                            Medžiagos
                        </Link>
                        <Link href="/technika" className="hover:text-blue-600">
                            Technika
                        </Link>
                        <Link href="/skaiciuokle" className="hover:text-blue-600">
                            Kainos skaičiuoklė
                        </Link>
                        <Link href="/naudinga" className="hover:text-blue-600">
                            Naudinga informacija
                        </Link>
                        <Link href="/apie" className="hover:text-blue-600">
                            Apie mus
                        </Link>
                        <Link href="/kontaktai" className="hover:text-blue-600">
                            Kontaktai
                        </Link>
                    </nav>

                    {/* Hamburger mygtukas rodoma tik mažesniuose ekranuose */}
                    <div className="lg:hidden">
                        <button
                            onClick={toggleMobileMenu}
                            className="text-gray-900 hover:text-blue-600"
                        >
                            <Bars3Icon className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Krepšelis, prisijungimas ir telefono numeris */}
                    <div className="flex items-center space-x-6">
                        <Link
                            href="/krepselis"
                            className="flex items-center space-x-2 bg-white border rounded-full px-4 py-2 shadow-sm hover:bg-gray-100 ml-6"
                        >
                            <ShoppingCartIcon className="w-6 h-6 text-gray-700" />
                            <span className="text-gray-900 font-medium">{cartTotal} EUR</span>
                        </Link>

                        {/* Prisijungti mygtukas */}
                        <a
                            href="/login"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-lg font-semibold text-gray-900 hover:text-blue-600 whitespace-nowrap"
                        >
                            Prisijungti
                        </a>

                        <a
                            href="tel:+37063338885"
                            className="text-lg font-semibold text-gray-900 hover:text-blue-400 whitespace-nowrap"
                        >
                            +370 633 38885
                        </a>
                    </div>

                </div>
            </header>

            {/* Išsiskleidžiantis meniu tarp headerio ir turinio */}
            {isMobileMenuOpen && (
                <div className="bg-white shadow-md lg:hidden mt-[64px]">
                    <nav className="flex flex-col space-y-2 px-6 py-4 text-lg font-medium">
                        <Link
                            href="/medziagos"
                            className="hover:text-blue-600"
                            onClick={toggleMobileMenu}
                        >
                            Medžiagos
                        </Link>
                        <Link
                            href="/technika"
                            className="hover:text-blue-600"
                            onClick={toggleMobileMenu}
                        >
                            Technika
                        </Link>
                        <Link
                            href="/skaiciuokle"
                            className="hover:text-blue-600"
                            onClick={toggleMobileMenu}
                        >
                            Kainos skaičiuoklė
                        </Link>
                        <Link
                            href="/naudinga"
                            className="hover:text-blue-600"
                            onClick={toggleMobileMenu}
                        >
                            Naudinga informacija
                        </Link>
                        <Link
                            href="/apie"
                            className="hover:text-blue-600"
                            onClick={toggleMobileMenu}
                        >
                            Apie mus
                        </Link>
                        <Link
                            href="/kontaktai"
                            className="hover:text-blue-600"
                            onClick={toggleMobileMenu}
                        >
                            Kontaktai
                        </Link>
                    </nav>
                </div>
            )}

            {/* Pagrindinis turinys */}
            <main className={`pt-[${isMobileMenuOpen ? 'calc(64px + 180px)' : '64px'}]`}>
                {/* Jūsų pagrindinio turinio komponentai */}
            </main>
        </>
    );
};

export default Header;
