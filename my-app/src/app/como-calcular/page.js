export default function Home() {
    return (
      <div>
        <main className="min-h-screen bg-blue-100 p-4 sm:p-8">
          <div className="text-center text-2xl sm:text-3xl font-bold text-blue-700 py-5">
            <h1>¿Cómo calcular los valores nutricionales de tus alimentos?</h1>
          </div>
          <div className="w-full max-w-lg sm:max-w-4xl mx-auto p-4 sm:p-6 bg-white shadow-lg rounded-lg">
            {[
              {
                title: "1. Revisa la etiqueta nutricional:",
                content: [
                  "Busca la tabla de información en el empaque del alimento.",
                  "Identifica los valores por porción, como Calorías (kcal), Azúcar (g), Proteínas (g), Sodio (mg), Grasas Totales (g) y Gramos Totales (g).",
                ],
              },
              {
                title: "2. Ajusta según la porción:",
                content: [
                  "Si comes una cantidad diferente a la indicada, ajusta los valores proporcionalmente.",
                  "Ejemplo:",
                  "Si la etiqueta dice 200 kcal por 100 g y consumes 50 g, el cálculo sería:",
                  "200 kcal × 50 g ÷ 100 g = 100 kcal.",
                ],
              },
              {
                title: "3. Usa herramientas confiables:",
                content: [
                  <>
                    Si el alimento no tiene etiqueta, consulta bases de datos confiables como{" "}
                    <a
                      key="link-usda"
                      className="text-blue-600 underline hover:text-blue-800"
                      href="https://fdc.nal.usda.gov/"
                    >
                      USDA FoodData Central
                    </a>{" "}
                    o aplicaciones similares.
                  </>,
                ],
              },
              {
                title: "4. Pesa tus alimentos:",
                content: [
                  "Utiliza una balanza de cocina para medir el peso exacto del alimento que vas a registrar.",
                ],
              },
              {
                title: "5. Aplica reglas generales:",
                content: [
                  "Para alimentos caseros, estima los valores utilizando recetas similares disponibles en bases de datos o aplicaciones.",
                ],
              },
            ].map((section, index) => (
              <div key={index} className="mb-4 sm:mb-6">
                <h2 className="text-lg sm:text-xl font-semibold text-blue-600 mb-2">
                  {section.title}
                </h2>
                <ul className="list-disc list-inside space-y-2 text-sm sm:text-base text-gray-700">
                  {section.content.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </main>
      </div>
    );
  }