"use client";

import { useState, useEffect } from "react";

export default function RootLayout({ children }) {
  const [loggedIn, setLoggedIn] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("loggedIn") === "true";
    setLoggedIn(isLoggedIn);
  }, []);

  const handleLogout = () => {
    localStorage.setItem("loggedIn", "false");
    setLoggedIn(false);
    alert("Has cerrado sesión.");
    window.location.reload();
  };

  return (
    <html lang="es">
      <head>
        <title>{process.env.title}</title>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.0.2/dist/tailwind.min.css" rel="stylesheet"/>
      </head>
      <body>
        <header className="bg-blue-600 text-white">
          <div className="container mx-auto flex justify-between items-center px-4 py-4">
          <h1>
            <img src="/imagenes/logo.png" alt="Logo" className="h-12" />
          </h1>
            <button onClick={() => setMenuOpen(!menuOpen)} className="sm:hidden text-white focus:outline-none">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}d="M4 6h16M4 12h16m-7 6h7"/>
              </svg>
            </button>
            <nav className={`${menuOpen ? "block" : "hidden"} sm:block absolute sm:static top-16 right-2 bg-blue-700 sm:bg-transparent shadow-lg sm:shadow-none z-10 rounded-lg`}>
              <ul className="flex flex-col sm:flex-row sm:space-x-10 text-lg items-start sm:items-center p-2 sm:p-0">
                <li className="hover:text-blue-300 my-2 sm:my-0 px-4 py-2 sm:px-0">
                  <a href="/">Inicio</a>
                </li>
                <li className="hover:text-blue-300 my-2 sm:my-0 px-4 py-2 sm:px-0">
                  <a href="/como-calcular">Como Calcular</a>
                </li>
                <li className="hover:text-blue-300 my-2 sm:my-0 px-4 py-2 sm:px-0">
                  <a href="/menu">Menu</a>
                </li>
                <li className="my-2 sm:my-0 px-4 py-2 sm:px-0">
                  {loggedIn ? (
                    <button onClick={handleLogout} className="w-full sm:w-auto px-4 py-2 bg-red-500 rounded-2xl hover:bg-white hover:text-red-500 transition duration-300">
                      Log out
                    </button>
                  ) : (
                    <a href="/login" className="w-full sm:w-auto px-4 py-2 bg-blue-800 rounded-2xl hover:bg-white hover:text-blue-500 transition duration-300">
                      Log in
                    </a>
                  )}
                </li>
              </ul>
            </nav>
          </div>
        </header>
        {children}
        <footer className="bg-blue-900 text-white text-center py-4">
          <p>&copy; 2024 (nombre pag). Todos los derechos reservados.</p>
        </footer>
      </body>
    </html>
  );
}