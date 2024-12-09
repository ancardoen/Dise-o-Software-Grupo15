"use client";
import { useState } from 'react';

{/* ej listas */}
const alimentos = {
    Manzana: {
      Calorías: "52 kcal",
      Azúcar: "10 g",
      Proteínas: "0.3 g",
      Sodio: "1 mg",
      "Grasas Totales": "0.2 g",
      "Gramos Totales": "100 g",
    },
    Pan: {
      Calorías: "265 kcal",
      Azúcar: "4.9 g",
      Proteínas: "9 g",
      Sodio: "491 mg",
      "Grasas Totales": "3.2 g",
      "Gramos Totales": "100 g",
    },
    Leche: {
      Calorías: "42 kcal",
      Azúcar: "5 g",
      Proteínas: "3.4 g",
      Sodio: "44 mg",
      "Grasas Totales": "1 g",
      "Gramos Totales": "100 g",
    },
  };

export default function Home() {
  const [alimentoSeleccionado, setAlimentoSeleccionado] = useState(null);

  const handleSelectionChange = (event) => {
    const alimento = event.target.value;
    setAlimentoSeleccionado(alimentos[alimento] || null);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-100">
      <div className="text-center text-2xl sm:text-3xl font-bold text-blue-700 py-5">
        <h1>Abrir Lista</h1>
      </div>
      <div className="mb-6">
        <label className="text-center block text-lg font-medium mb-2">Selecciona una lista:</label>
        <select className="w-full max-w-md border border-gray-300 rounded-lg p-2" onChange={handleSelectionChange}>
          <option value="" disabled>
            -- Selecciona un alimento --
          </option>
          {Object.keys(alimentos).map((alimento) => (
            <option key={alimento} value={alimento}>
              {alimento}
            </option>
          ))}
        </select>
      </div>

      {alimentoSeleccionado && (
        <table className="w-full max-w-lg bg-blue-50 shadow-md rounded-lg overflow-hidden">
          <thead className="bg-blue-200">
            <tr>
              <th className="text-left px-4 py-2">Nutriente</th>
              <th className="text-right px-4 py-2">Cantidad</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(alimentoSeleccionado).map(([key, value]) => (
              <tr key={key} className="border-t">
                <td className="px-4 py-2">{key}</td>
                <td className="px-4 py-2 text-right">{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}