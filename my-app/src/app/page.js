import Link from 'next/link';

export default function Home() {
    return (
        <div>
            <main className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
                    <form className="grid grid-cols-2 gap-4">
                        <div>
                            <Link href="#">
                                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                                    Buscar Alimento
                                </button>
                            </Link>
                            <Link href="/ingresar">
                                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                                    Ingresar Alimento
                                </button>
                            </Link>
                        </div>
                        <div>
                            <Link href="#">
                                    <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                                        Crear Lista
                                    </button>
                            </Link>
                            <Link href="#">
                                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                                    Abrir Lista
                                </button>
                            </Link>
                        </div>
                    </form>
                </div>
            </main>
            <footer className="bg-red-500 text-center">
                <p className="py-2">&copy; 2024 Test</p>
            </footer>
        </div>
    );
}