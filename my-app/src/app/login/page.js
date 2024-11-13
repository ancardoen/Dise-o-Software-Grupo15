import Link from 'next/link';

export default function Home() {
    return (
        <div>
            <main className="flex items-center justify-center min-h-screen bg-blue-100">
                <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
                    <div className="text-center mb-6">
                        <p className="text-2xl font-bold text-gray-700">Log in</p>
                    </div>
                    <form className="space-y-4">
                        <div>
                            <input 
                                id="mail" 
                                type="text" 
                                placeholder="Correo" 
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"/>
                        </div>
                        <div>
                            <input 
                                id="password" 
                                type="password" 
                                placeholder="******" 
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"/>
                        </div>
                        <div className="flex justify-between">
                            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                                Log in
                            </button>
                            <Link href="/signup">
                                <button type="submit" className="px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-600">
                                    Ir a Sign-up
                                </button>
                            </Link>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
}