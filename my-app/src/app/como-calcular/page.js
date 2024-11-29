export default function Home() {
    return (
        <div>
            <main className="min-h-screen bg-blue-50 p-8">
            <div className="text-2xl py-5">
                <h1>¿Cómo calcular los valores nutricionales de tus alimentos?</h1>
            </div>
                <div className="w-full max-w-5xl p-6 bg-white shadow-md rounded-lg">
                    <div>
                        <h2>1. Revisa la etiqueta nutricional:</h2>
                        <li>Busca la tabla de información en el empaque del alimento.</li>
                        <li>Identifica los valores por porción, como Calorías (kcal), Azúcar (g), Proteínas (g), Sodio (mg), Grasas Totales (g) y Gramos Totales (g).</li>
                    </div>
                    <div>
                        <h2>2. Ajusta según la porción:</h2>
                        <li>Si comes una cantidad diferente a la indicada, ajusta los valores proporcionalmente.</li>
                        <li>Ejemplo:</li>
                        <p>- Si la etiqueta dice 200 kcal por 100 g y consumes 50 g, el cálculo sería:</p>
                        <p>- 200 kcal x 50 g / 100g = 100 kcal.</p>
                    </div>
                    <div>
                        <h2>3. Usa herramientas confiables:</h2>
                        <li>Si el alimento no tiene etiqueta, consulta bases de datos confiables como <a className="underline" href="https://fdc.nal.usda.gov/">USDA FoodData Central</a> o aplicaciones similares.</li>
                    </div>
                    <div>
                        <h2>4. Pesa tus alimentos:</h2>
                        <li>Utiliza una balanza de cocina para medir el peso exacto del alimento que vas a registrar.</li>
                    </div>
                    <div>
                        <h2>5. Aplica reglas generales:</h2>
                        <li>Para alimentos caseros, estima los valores utilizando recetas similares disponibles en bases de datos o aplicaciones.</li>
                    </div>
                </div>
            </main>
        </div>
    );
}