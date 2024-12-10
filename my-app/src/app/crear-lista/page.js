"use client";
import { useState } from 'react';

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

export default function CrearLista() {
  const [listaAlimentos, setListaAlimentos] = useState([]);
  const [alimentoSeleccionado, setAlimentoSeleccionado] = useState("");
  const [nombreLista, setNombreLista] = useState("");

  const handleAgregarAlimento = () => {
    if (alimentoSeleccionado && alimentos[alimentoSeleccionado]) {
      setListaAlimentos([...listaAlimentos, { nombre: alimentoSeleccionado, ...alimentos[alimentoSeleccionado] }]);
      setAlimentoSeleccionado("");
    }
  };

  const handleEliminarAlimento = (index) => {
    const nuevaLista = listaAlimentos.filter((_, i) => i !== index);
    setListaAlimentos(nuevaLista);
  };

  const handleGuardarLista = () => {
    if (!nombreLista) {
      alert("Por favor, asigna un nombre a la lista antes de guardar.");
      return;
    }
    alert(`Lista "${nombreLista}" guardada con éxito.`);
    setListaAlimentos([]);
    setNombreLista("");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-100 p-4">
      <h1 className="text-center text-2xl sm:text-3xl font-bold text-blue-700 py-5">Crear Lista de Alimentos</h1>
      <label htmlFor="alimento" className="block text-lg font-medium mb-2">Selecciona un alimento:</label>

      <div className="mb-6 flex items-center gap-4">
        <select
          id="alimento"
          className="w-full max-w-md border border-gray-300 rounded-lg p-2"
          value={alimentoSeleccionado}
          onChange={(e) => setAlimentoSeleccionado(e.target.value)}>
          <option value="" disabled>-- Selecciona un alimento --</option>
          {Object.keys(alimentos).map((alimento) => (
            <option key={alimento} value={alimento}>{alimento}</option>
          ))}
        </select>
        <button onClick={handleAgregarAlimento} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Añadir
        </button>
      </div>

      {/* tabla para lista */}
      {listaAlimentos.length > 0 && (
        <div>
          <table className="w-full max-w-lg bg-blue-50 shadow-md rounded-lg overflow-hidden">
            <thead className="bg-blue-200">
              <tr>
                <th className="text-left px-4 py-2">Alimento</th>
                <th className="text-left px-4 py-2">Calorías</th>
                <th className="text-left px-4 py-2">Azúcar</th>
                <th className="text-left px-4 py-2">Proteínas</th>
                <th className="text-left px-4 py-2">Sodio</th>
                <th className="text-left px-4 py-2">Grasas Totales</th>
                <th className="text-left px-4 py-2">Gramos Totales</th>
                <th className="text-left px-4 py-2"></th>
              </tr>
            </thead>
            <tbody>
              {listaAlimentos.map((alimento, index) => (
                <tr key={index} className="border-t">
                  <td className="px-4 py-2">{alimento.nombre}</td>
                  <td className="px-4 py-2">{alimento.Calorías}</td>
                  <td className="px-4 py-2">{alimento.Azúcar}</td>
                  <td className="px-4 py-2">{alimento.Proteínas}</td>
                  <td className="px-4 py-2">{alimento.Sodio}</td>
                  <td className="px-4 py-2">{alimento["Grasas Totales"]}</td>
                  <td className="px-4 py-2">{alimento["Gramos Totales"]}</td>
                  <td className="px-4 py-2">
                    <button onClick={() => handleEliminarAlimento(index)} className="bg-red-500 text-white px-2 py-1 rounded-lg hover:bg-red-600">
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mb-6 flex items-center gap-4 p-6 justify-center">
            <input type="text" placeholder="Nombre de la lista" value={nombreLista} onChange={(e) => setNombreLista(e.target.value)} className="w-full max-w-md border border-gray-300 rounded-lg p-2"/>
            <button onClick={handleGuardarLista} className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
              Guardar
            </button>
          </div>
        </div>
      )}

      {listaAlimentos.length === 0 && (
        <p className="text-gray-500 mt-4">No hay alimentos en la lista. Agrega uno para comenzar.</p>
      )}
    </div>
  );
}