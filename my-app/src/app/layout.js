export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <title>
          {process.env.title}
        </title>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.0.2/dist/tailwind.min.css"
          rel="stylesheet" />
      </head>
      <body>
        <header className="bg-blue-600 text-white py-4 flex flex-wrap justify-between items-center">
          <h1 className="text-2xl sm:text-4xl font-bold ml-4 sm:ml-8">Logo</h1>
          <nav className="w-full sm:w-auto text-center mt-4 sm:mt-0">
            <ul className="text-lg sm:text-2xl flex flex-col sm:flex-row sm:space-x-10 items-center mr-8">
              <li className="hover:text-blue-900 my-2 sm:my-0"><a href="/">Inicio</a></li>
              <li className="hover:text-blue-900 my-2 sm:my-0"><a href="/como-calcular">Como Calcular</a></li>
              <li className="hover:text-blue-900 my-2 sm:my-0"><a href="/menu">Menu</a></li>
              <li className="my-2 sm:my-0">
                  <a href="/login" className="px-4 py-2 bg-blue-800 rounded-2xl hover:bg-white hover:text-blue-500 transition duration-300">
                  Log in
                  </a>
              </li>
            </ul>
          </nav>
        </header>
          {children}
        <footer className="bg-blue-900 text-white text-center py-4">
          <p>&copy; 2024 (nombre pag). Todos los derechos reservados.</p>
        </footer>
      </body>
    </html>
  );
}
