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
      <header class="bg-blue-600 text-white text-center py-4 flex justify-between items-center">
        <h1 class="text-4xl font-bold ml-8">Logo</h1>
        <nav class="py-3">
          <ul class="text-2xl flex space-x-10 mr-8">
            <li class="hover:text-blue-900"><a href="/">Inicio</a></li>
            <li class="hover:text-blue-900"><a href="/como-calcular">Como Calcular</a></li>
            <li class="hover:text-blue-900"><a href="/menu">Menu</a></li>
            <li class="space-x-2">
                <a href="/login" class="px-4 py-2 bg-blue-800 rounded-2xl hover:bg-white hover:text-blue-500 transition duration-300">Log in</a>
            </li>
          </ul>
        </nav>
      </header>
        {children}
      <footer class="bg-blue-900 text-white text-center py-4">
        <p>&copy; 2024 (nombre pag). Todos los derechos reservados.</p>
      </footer>
      
      </body>
    </html>
  );
}
