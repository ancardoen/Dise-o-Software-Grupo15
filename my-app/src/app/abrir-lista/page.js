"use client";

import { useState } from "react";

const listasGuardadas = [
  {
    nombre: "Lista 1",
    alimentos: [
      {
        nombre: "Manzana",
        Calorías: "52 kcal",
        Azúcar: "10 g",
        Proteínas: "0.3 g",
        Sodio: "1 mg",
        "Grasas Totales": "0.2 g",
        "Gramos Totales": "100 g",
      },
      {
        nombre: "Pan",
        Calorías: "265 kcal",
        Azúcar: "4.9 g",
        Proteínas: "9 g",
        Sodio: "491 mg",
        "Grasas Totales": "3.2 g",
        "Gramos Totales": "100 g",
      },
    ],
  },
  {
    nombre: "Lista 2",
    alimentos: [
      {
        nombre: "Leche",
        Calorías: "42 kcal",
        Azúcar: "5 g",
        Proteínas: "3.4 g",
        Sodio: "44 mg",
        "Grasas Totales": "1 g",
        "Gramos Totales": "100 g",
      },
    ],
  },
];

export default function AbrirLista() {
  const [listaSeleccionada, setListaSeleccionada] = useState(null);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-100 p-4">
      <h1 className="text-center text-2xl sm:text-3xl font-bold text-blue-700 py-5">Abrir Lista</h1>
      <label htmlFor="alimento" className="block text-lg font-medium mb-2">Selecciona una lista:</label>
      <div className="mb-6 flex items-center gap-4">
        <select
          id="lista"
          className="w-full max-w-md border border-gray-300 rounded-lg p-2"
          value={listaSeleccionada ? listaSeleccionada.nombre : ""}
          onChange={(e) =>
            setListaSeleccionada(
              listasGuardadas.find((lista) => lista.nombre === e.target.value)
            )
          }
        >
          <option value="" disabled>
            -- Selecciona una lista --
          </option>
          {listasGuardadas.map((lista) => (
            <option key={lista.nombre} value={lista.nombre}>
              {lista.nombre}
            </option>
          ))}
        </select>
      </div>
      {listaSeleccionada ? (
        <div className="bg-white shadow-md rounded-lg overflow-hidden border-2 border-gray-300">
          <h2 className="text-xl font-bold px-4 py-2 bg-blue-200">
            {listaSeleccionada.nombre}
          </h2>
          <table className="w-full max-w-lg bg-blue-50 shadow-md overflow-hidden">
            <thead className="bg-blue-200">
              <tr>
                <th className="text-left px-4 py-2">Alimento</th>
                <th className="text-left px-4 py-2">Calorías</th>
                <th className="text-left px-4 py-2">Azúcar</th>
                <th className="text-left px-4 py-2">Proteínas</th>
                <th className="text-left px-4 py-2">Sodio</th>
                <th className="text-left px-4 py-2">Grasas Totales</th>
                <th className="text-left px-4 py-2">Gramos Totales</th>
              </tr>
            </thead>
            <tbody>
              {listaSeleccionada.alimentos.map((alimento, index) => (
                <tr key={index} className="border-t">
                  <td className="px-4 py-2">{alimento.nombre}</td>
                  <td className="px-4 py-2">{alimento.Calorías}</td>
                  <td className="px-4 py-2">{alimento.Azúcar}</td>
                  <td className="px-4 py-2">{alimento.Proteínas}</td>
                  <td className="px-4 py-2">{alimento.Sodio}</td>
                  <td className="px-4 py-2">{alimento["Grasas Totales"]}</td>
                  <td className="px-4 py-2">{alimento["Gramos Totales"]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-gray-500 mt-4">
          Selecciona una lista para visualizar sus alimentos.
        </p>
      )}
    </div>
  );
}