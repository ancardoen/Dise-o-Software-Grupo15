"use client";

import { useState, useEffect } from "react";

export default function AbrirLista() {
  const [listasGuardadas, setListasGuardadas] = useState([]);
  const [listaSeleccionada, setListaSeleccionada] = useState(null);

  // Cargar las listas desde el localStorage cuando el componente se monte
  useEffect(() => {
    const listas = JSON.parse(localStorage.getItem("ListasGuardadas")) || [];
    setListasGuardadas(listas);
  }, []);

  // Función que maneja el cambio de lista seleccionada
  const handleListaChange = (e) => {
    const selectedList = listasGuardadas.find((lista) => lista.nombre === e.target.value);
    setListaSeleccionada(selectedList || null);
  };

  // Función para calcular el total de los nutrientes
  const calcularTotales = () => {
    if (!listaSeleccionada) return null;

    let totales = {
      Calorías: 0,
      Azúcar: 0,
      Proteínas: 0,
      Sodio: 0,
      "Grasas Totales": 0,
      "Gramos Totales": 0,
    };

    listaSeleccionada.alimentos?.forEach((alimento) => {
      // Sumar los nutrientes de cada alimento
      totales.Calorías += alimento.calorias || 0;
      totales.Azúcar += alimento.azucar || 0;
      totales.Proteínas += alimento.proteinas || 0;
      totales.Sodio += alimento.sodio || 0;
      totales["Grasas Totales"] += alimento.grasas || 0;
      totales["Gramos Totales"] += alimento.gramosTotales || 0;
    });

    // Redondear los totales a dos decimales
    Object.keys(totales).forEach((key) => {
      totales[key] = totales[key].toFixed(2); // Redondea a 2 decimales
    });

    return totales;
  };

  const totales = calcularTotales();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-100 p-4">
      <h1 className="text-center text-2xl sm:text-3xl font-bold text-blue-700 py-5">Abrir Lista</h1>
      <label htmlFor="alimento" className="block text-lg font-medium mb-2">Selecciona una lista:</label>
      <div className="mb-6 flex items-center gap-4">
        <select
          id="lista"
          className="w-full max-w-md border border-gray-300 rounded-lg p-2"
          value={listaSeleccionada ? listaSeleccionada.nombre : ""}
          onChange={handleListaChange}
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
              {listaSeleccionada.alimentos?.map((alimento, index) => (
                <tr key={index} className="border-t">
                  <td className="px-4 py-2">{alimento.nombre}</td>
                  <td className="px-4 py-2">{alimento.calorias || "N/A"} kcal</td>
                  <td className="px-4 py-2">{alimento.azucar || "N/A"} g</td>
                  <td className="px-4 py-2">{alimento.proteinas || "N/A"} g</td>
                  <td className="px-4 py-2">{alimento.sodio || "N/A"} mg</td>
                  <td className="px-4 py-2">{alimento.grasas || "N/A"} g</td>
                  <td className="px-4 py-2">{alimento.gramosTotales || "N/A"} g</td>
                </tr>
              ))}
            </tbody>
          </table>
          {totales && (
            <div className="bg-blue-200 px-4 py-2 mt-4">
              <h3 className="font-bold text-lg">Totales:</h3>
              <p>Calorías: {totales.Calorías} kcal</p>
              <p>Azúcar: {totales.Azúcar} g</p>
              <p>Proteínas: {totales.Proteínas} g</p>
              <p>Sodio: {totales.Sodio} mg</p>
              <p>Grasas Totales: {totales["Grasas Totales"]} g</p>
              <p>Gramos Totales: {totales["Gramos Totales"]} g</p>
            </div>
          )}
        </div>
      ) : (
        <p className="text-gray-500 mt-4">
          Selecciona una lista para visualizar sus alimentos.
        </p>
      )}
    </div>
  );
}
