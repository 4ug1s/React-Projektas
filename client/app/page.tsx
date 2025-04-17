"use client";

import Link from "next/link";

const MainPage = () => {
  return (
      <main className="bg-gray-50">
        {/* Hero skyrius */}
        <section
            className="relative bg-cover bg-center bg-no-repeat py-16"
            style={{
              backgroundImage:
                  "url('https://plus.unsplash.com/premium_photo-1675543163354-e4dc1f541330?q=80&w=1674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
            }}
        >
          {/* Overlay, kad tekstas būtų aiškus */}
          <div className="absolute inset-0 bg-black/60"></div>
          <div className="relative container mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-100 my-6">
              Patogus ir greitas būdas užsakyti birias statybines medžiagas!
            </h1>
            <p className="text-lg mb-6 text-gray-100">
              Birių medžiagų pristatymas bei išvežimas – jums patogiu laiku. Čia galite pasirinkti tarp populiariausių ir dažniausiai naudojamų medžiagų statybose.
            </p>
            <p className="text-lg mb-6 text-white">
              Norite pasitarti? Susisiekite su mumis!
            </p>
            <div className="flex justify-center space-x-6 mx-6">
              <a
                  href="tel:+37063338885"
                  className="text-lg font-semibold text-gray-100 hover:text-blue-400"
              >
                +370 633 38885
              </a>
              <p className="text-lg text-gray-100">arba</p>
              <a
                  href="mailto:algintra@gmail.com"
                  className="text-lg font-semibold text-gray-100 hover:text-blue-400"
              >
                algintra@gmail.com
              </a>
            </div>
          </div>
        </section>

        {/* Paslaugos */}
        <section className="py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Mūsų Teikiamos Paslaugos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                    src="/resources/MANTGA.jpg"
                    alt="Birių Krovinių Pervežimas"
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover rounded-t-lg mb-4"
                />
                <h3 className="text-2xl font-semibold mb-4">Birių Krovinių Pervežimas</h3>
                <p className="text-gray-700 mb-4">
                  Suteikiame visapusišką sprendimą, pristatydami smėlį, žvyrą, skaldą, juodžemį ir kitus krovinius greitai ir patikimai.
                </p>
                <Link
                    href="/medziagos"
                    className="text-blue-600 font-semibold hover:underline"
                >
                  Sužinokite daugiau
                </Link>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                    src="/resources/IMG_20250311_113948149.jpg"
                    alt="Sunkiasvorio Transporto Nuoma"
                    className="w-full h-48 object-cover rounded-t-lg mb-4"
                />
                <h3 className="text-2xl font-semibold mb-4">Savivarčių Nuoma</h3>
                <p className="text-gray-700 mb-4">
                  Nuomojame galingus savivarčius isu vairuotojais užtikrindami kokybiįką darbą jūsų objekte.
                </p>
                <Link
                    href="/technika"
                    className="text-blue-600 font-semibold hover:underline"
                >
                  Sužinokite daugiau
                </Link>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                    src="/resources/IMG_20250311_120645878.jpg"
                    alt="Kainos Skaičiuoklė"
                    className="w-full h-48 object-cover rounded-t-lg mb-4"
                />
                <h3 className="text-2xl font-semibold mb-4">Kainos Skaičiuoklė</h3>
                <p className="text-gray-700 mb-4">
                  Greitai apskaičiuokite paslaugų kainas pagal jūsų poreikius su mūsų interaktyvia skaičiuokle.
                </p>
                <Link
                    href="/skaiciuokle"
                    className="text-blue-600 font-semibold hover:underline"
                >
                  Pabandykite dabar
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Apie mus */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Apie Mus</h2>
            <img
                src="/resources/IMG_20250311_120706915.jpg"
                alt="Apie Mus"
                className="w-full h-72 object-cover rounded-lg mb-6"
            />
            <p className="text-lg text-gray-700 mb-4">
              MB Algintra – tai įmonė, kuri specializuojasi birių krovinių pervežime ir savivarčių nuomoje.Visada siekiame užtikrinti aukščiausią paslaugų kokybę.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Mūsų komanda yra pasirengusi padėti jums su bet krovinių pervežimo poreikiu, siekiant užtikrinti greitą ir kokybišką paslaugų teikimą.
            </p>
            <Link
                href="/apie"
                className="inline-block bg-blue-600 text-white font-semibold py-2 px-6 rounded-full shadow-md hover:bg-blue-700"
            >
              Sužinokite daugiau
            </Link>
          </div>
        </section>
        {/* Kontaktai */}

        <section className="py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Susisiekite su Mumis</h2>
            <p className="text-lg text-gray-700 mb-4">
              Norite užsakyti mūsų paslaugas ar turite klausimų, arba sužinoti daugiau apie mūsų paslaugas? Susisiekite su mumis +3706 333 8885 ir mes atsakysime į visus jūsų klausimus.
            </p>
            <Link
                href="/kontaktai"
                className="inline-block bg-blue-600 text-white font-semibold py-2 px-6 rounded-full shadow-md hover:bg-blue-700"
            >
              Susisiekite dabar
            </Link>
          </div>
        </section>
      </main>
  );
};

export default MainPage;
