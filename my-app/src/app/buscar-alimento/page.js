"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [alimentoSeleccionado, setAlimentoSeleccionado] = useState(null);
  const [alimentos, setAlimentos] = useState({});

  const handleSelectionChange = (event) => {
    const alimento = event.target.value;
    setAlimentoSeleccionado(alimentos[alimento] || null);
  };

  useEffect(() => {
    const obtenerAlimentos = () => {
      console.log("Leyendo datos desde localStorage...");
      
      const coleccionesJSON = localStorage.getItem("Colections");
      if (!coleccionesJSON) {
        console.error("No se encontró la clave 'Colections' en localStorage.");
        return {};
      }

      try {
        const colecciones = JSON.parse(coleccionesJSON);

        const data = colecciones.reduce((acc, item) => {
          const [nombre, calorias, azucar, proteinas, sodio, grasasTotales, gramosTotales] = item.values;

          // Parsear valores a números para realizar cálculos
          const gramos = parseFloat(gramosTotales);
          const caloriasCalculadas = (parseFloat(calorias) / 100) * gramos;
          const azucarCalculada = (parseFloat(azucar) / 100) * gramos;
          const proteinasCalculadas = (parseFloat(proteinas) / 100) * gramos;
          const sodioCalculado = (parseFloat(sodio) / 100) * gramos;
          const grasasTotalesCalculadas = (parseFloat(grasasTotales) / 100) * gramos;

          acc[nombre] = {
            Calorías: `${caloriasCalculadas.toFixed(2)} kcal`,
            Azúcar: `${azucarCalculada.toFixed(2)} g`,
            Proteínas: `${proteinasCalculadas.toFixed(2)} g`,
            Sodio: `${sodioCalculado.toFixed(2)} mg`,
            "Grasas Totales": `${grasasTotalesCalculadas.toFixed(2)} g`,
            "Gramos Totales": `${gramos} g`, // Mantener este valor como referencia
          };

          return acc;
        }, {});

        console.log("Datos transformados:", data);
        return data;
      } catch (error) {
        console.error("Error al parsear los datos desde localStorage:", error);
        return {};
      }
    };

    const datosAlimentos = obtenerAlimentos();
    setAlimentos(datosAlimentos);
  }, []);

  useEffect(() => {
    console.log("Estado alimentos actualizado:", alimentos);
  }, [alimentos]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-100">
      <div className="text-center text-2xl sm:text-3xl font-bold text-blue-700 py-5">
        <h1>Buscar Alimento</h1>
      </div>
      <div className="mb-6">
        <label className="text-center block text-lg font-medium mb-2">Selecciona un alimento:</label>
        <select
          value = ""
          className="w-full max-w-md border border-gray-300 rounded-lg p-2"
          onChange={handleSelectionChange}
        >
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
              <th className="text-right px-4 py-2">Cantidad en la porción</th>
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
