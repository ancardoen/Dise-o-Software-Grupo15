import Link from 'next/link';

export default function Home() {
    return (
        <div>
            <main className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
                    <div className="text-center mb-6">
                        <p className="text-2xl font-bold text-gray-700">Signup</p>
                    </div>
                    <form className="space-y-4">
                        <div>
                            <label className="block mb-1 text-gray-700 font-medium">Elige lenguaje preferido</label>
                            <select id="lenguaje" name="options" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none">
                                <option value="esp">Español</option>
                                <option value="eng">English</option>
                            </select>
                        </div>
                        <div>
                            <label className="block mb-1 text-gray-700 font-medium">Nombre de Usuario</label>
                            <input id="name" type="text" placeholder="Coloca tu nombre" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"/>
                        </div>
                        <div>
                            <label className="block mb-1 text-gray-700 font-medium">Correo</label>
                            <input id="mail" type="text" placeholder="Inserta tu Correo" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"/>
                        </div>
                        <div>
                            <label className="block mb-1 text-gray-700 font-medium">Contraseña</label>
                            <input id="password" type="password" placeholder="Crea una Contraseña" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"/>
                        </div>
                        <div>
                            <label className="block mb-1 text-gray-700 font-medium">Confirmar Contraseña</label>
                            <input id="password" type="password" placeholder="Confirma tu Contraseña" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"/>
                        </div>
                        <div className="flex justify-between">
                            <Link href="/login">
                                <button type="submit" className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
                                    Ir a Log in
                                </button>
                            </Link>
                            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                                Signup
                            </button>
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