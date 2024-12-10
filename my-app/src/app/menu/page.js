import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <main className="flex items-center justify-center min-h-screen bg-blue-100 p-4">
        <div className="w-full max-w-md sm:max-w-4xl p-6 sm:p-12 bg-white shadow-lg rounded-lg">
          <h2 className="text-lg sm:text-2xl font-semibold text-center text-gray-700 mb-4 sm:mb-6">
            Opciones de Menú
          </h2>
          <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link href="/buscar-alimento">
              <button type="submit" className="w-full px-4 py-3 bg-blue-500 text-white font-medium rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-150">
                Buscar Alimento
              </button>
            </Link>
            <Link href="/crear-lista">
              <button type="submit" className="w-full px-4 py-3 bg-blue-500 text-white font-medium rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-150">
                Crear Lista
              </button>
            </Link>
            <Link href="/ingresar-alimento">
              <button type="submit" className="w-full px-4 py-3 bg-blue-500 text-white font-medium rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-150">
                Ingresar Alimento
              </button>
            </Link>
            <Link href="/abrir-lista">
              <button type="submit" className="w-full px-4 py-3 bg-blue-500 text-white font-medium rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-150">
                Abrir Lista
              </button>
            </Link>
          </form>
        </div>
      </main>
    </div>
  );
}