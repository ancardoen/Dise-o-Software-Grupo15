export default function Home() {
    return (
        <div>
            <main className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
                    <div className="text-center mb-6">
                        <p className="text-2xl font-bold text-gray-700">Ingrediente (X)</p>
                    </div>
                    <form className="grid grid-cols-2 gap-4">
                        <div>
                            <label>Calorías (kcal)</label>
                            <input id="calorias" type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"/>
                        </div>
                        <div>
                            <label>Azúcar (g)</label>
                            <input id="azucar" type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"/>
                        </div>
                        <div>
                            <label>Proteínas (g)</label>
                            <input id="proteinas" type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"/>
                        </div>
                        <div>
                            <label>Sodio (mg)</label>
                            <input id="sodio" type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"/>
                        </div>
                        <div>
                            <label>Grasas Totales (g)</label>
                            <input id="grasas" type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"/>
                        </div>
                        <div>
                            <label>Gramos Totales (g)</label>
                            <input id="gramos" type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"/>
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