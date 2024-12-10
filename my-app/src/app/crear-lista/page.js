"use client";
import { useEffect, useState } from "react";

export default function CrearLista() {
  const [listaAlimentos, setListaAlimentos] = useState([]);
  const [alimentoSeleccionado, setAlimentoSeleccionado] = useState("");
  const [nombreLista, setNombreLista] = useState("");
  const [alimentos, setAlimentos] = useState({});

  const calcularTotales = () => {
    // Inicializamos las variables para sumar los nutrientes
    let totalCalorias = 0;
    let totalAzucar = 0;
    let totalProteinas = 0;
    let totalSodio = 0;
    let totalGrasas = 0;
    let totalGramos = 0;
  
    // Recorremos todos los alimentos en la lista
    listaAlimentos.forEach((alimento) => {
      // Extraemos los nutrientes de cada alimento en la lista
      const calorias = parseFloat(alimento.Calorías);
      const azucar = parseFloat(alimento.Azúcar);
      const proteinas = parseFloat(alimento.Proteínas);
      const sodio = parseFloat(alimento.Sodio);
      const grasas = parseFloat(alimento["Grasas Totales"]);
      const gramosTotales = parseFloat(alimento["Gramos Totales"]);
  
      // Sumamos los nutrientes al total
      totalCalorias += calorias;
      totalAzucar += azucar;
      totalProteinas += proteinas;
      totalSodio += sodio;
      totalGrasas += grasas;
      totalGramos += gramosTotales;
    });
  
    return {
      calorias: totalCalorias,
      azucar: totalAzucar,
      proteinas: totalProteinas,
      sodio: totalSodio,
      grasas: totalGrasas,
      gramosTotales: totalGramos,
    };
  };
  
  
  
  useEffect(() => {
    const obtenerAlimentos = () => {
      const coleccionesJSON = localStorage.getItem("Colections");
      if (!coleccionesJSON) return {};

      try {
        const colecciones = JSON.parse(coleccionesJSON);
        const data = colecciones.reduce((acc, item) => {
          const [nombre, calorias, azucar, proteinas, sodio, grasasTotales, gramosTotales] = item.values;

          const gramos = parseFloat(gramosTotales);
          acc[nombre] = {
            Calorías: (parseFloat(calorias) / 100) * gramos,
            Azúcar: (parseFloat(azucar) / 100) * gramos,
            Proteínas: (parseFloat(proteinas) / 100) * gramos,
            Sodio: (parseFloat(sodio) / 100) * gramos,
            "Grasas Totales": (parseFloat(grasasTotales) / 100) * gramos,
            "Gramos Totales": gramos,
          };

          return acc;
        }, {});

        return data;
      } catch (error) {
        console.error("Error al leer los datos de localStorage:", error);
        return {};
      }
    };

    setAlimentos(obtenerAlimentos());
  }, []);

  const handleAgregarAlimento = () => {
    if (alimentoSeleccionado && alimentos[alimentoSeleccionado]) {
      setListaAlimentos([...listaAlimentos, { nombre: alimentoSeleccionado, ...alimentos[alimentoSeleccionado] }]);
      setAlimentoSeleccionado("");
    }
  };

  const handleEliminarAlimento = (index) => {
    setListaAlimentos(listaAlimentos.filter((_, i) => i !== index));
  };

  const handleGuardarLista = () => {
    if (!nombreLista) {
      alert("Por favor, asigna un nombre a la lista antes de guardar.");
      return;
    }
  
    const nombresDeAlimentos = listaAlimentos.map(alimento => alimento.nombre);
  
    // Calcular los totales de nutrientes
    const totalesNutrientes = listaAlimentos.reduce((acc, alimento) => {
      acc.Calorías += parseFloat(alimento.Calorías) || 0;
      acc.Azúcar += parseFloat(alimento.Azúcar) || 0;
      acc.Proteínas += parseFloat(alimento.Proteínas) || 0;
      acc.Sodio += parseFloat(alimento.Sodio) || 0;
      acc["Grasas Totales"] += parseFloat(alimento["Grasas Totales"]) || 0;
  
      return acc;
    }, {
      Calorías: 0,
      Azúcar: 0,
      Proteínas: 0,
      Sodio: 0,
      "Grasas Totales": 0
    });
  
    // Redondear los totales de nutrientes
    const totalesRedondeados = {
      Calorías: parseFloat(totalesNutrientes.Calorías.toFixed(2)),
      Azúcar: parseFloat(totalesNutrientes.Azúcar.toFixed(2)),
      Proteínas: parseFloat(totalesNutrientes.Proteínas.toFixed(2)),
      Sodio: parseFloat(totalesNutrientes.Sodio.toFixed(2)),
      "Grasas Totales": parseFloat(totalesNutrientes["Grasas Totales"].toFixed(2)),
    };
  
    // Crear la estructura para almacenar en localStorage
    const listaConNombres = {
      nombre: nombreLista,
      nutrientesTotales: totalesRedondeados,
      alimentos: listaAlimentos.map((alimento) => ({
        nombre: alimento.nombre,
        calorias: parseFloat(alimento.Calorías.toFixed(2)),
        azucar: parseFloat(alimento.Azúcar.toFixed(2)),
        proteinas: parseFloat(alimento.Proteínas.toFixed(2)),
        sodio: parseFloat(alimento.Sodio.toFixed(2)),
        grasas: parseFloat(alimento["Grasas Totales"].toFixed(2)),
        gramosTotales: parseFloat(alimento["Gramos Totales"].toFixed(2)),
      }))
    };
  
    // Verificar que los nutrientes están correctamente incluidos en 'alimentos'
    console.log(listaConNombres);
  
    // Guardar en localStorage
    const listasGuardadas = JSON.parse(localStorage.getItem("ListasGuardadas")) || [];
    listasGuardadas.push(listaConNombres);
    localStorage.setItem("ListasGuardadas", JSON.stringify(listasGuardadas));
  
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
          onChange={(e) => setAlimentoSeleccionado(e.target.value)}
        >
          <option value="" disabled>-- Selecciona un alimento --</option>
          {Object.keys(alimentos).map((alimento) => (
            <option key={alimento} value={alimento}>{alimento}</option>
          ))}
        </select>
        <button onClick={handleAgregarAlimento} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Añadir
        </button>
      </div>

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
                  <td className="px-4 py-2">{alimento.Calorías.toFixed(2)} kcal</td>
                  <td className="px-4 py-2">{alimento.Azúcar.toFixed(2)} g</td>
                  <td className="px-4 py-2">{alimento.Proteínas.toFixed(2)} g</td>
                  <td className="px-4 py-2">{alimento.Sodio.toFixed(2)} mg</td>
                  <td className="px-4 py-2">{alimento["Grasas Totales"].toFixed(2)} g</td>
                  <td className="px-4 py-2">{alimento["Gramos Totales"]} g</td>
                  <td className="px-4 py-2">
                    <button onClick={() => handleEliminarAlimento(index)} className="bg-red-500 text-white px-2 py-1 rounded-lg hover:bg-red-600">
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* Segunda tabla con sumas totales */}
          <table className="w-full max-w-lg bg-blue-50 shadow-md rounded-lg overflow-hidden mt-4 ml-24">
            <thead className="bg-blue-200">
              <tr>
                <th className="text-left px-4 py-2">Total Calorías</th>
                <th className="text-left px-4 py-2">Total Azúcar</th>
                <th className="text-left px-4 py-2">Total Proteínas</th>
                <th className="text-left px-4 py-2">Total Sodio</th>
                <th className="text-left px-4 py-2">Total Grasas Totales</th>
                <th className="text-left px-4 py-2">Total de gamos</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t">
                <td className="px-4 py-2">{calcularTotales().calorias.toFixed(2)} kcal</td>
                <td className="px-4 py-2">{calcularTotales().azucar.toFixed(2)} g</td>
                <td className="px-4 py-2">{calcularTotales().proteinas.toFixed(2)} g</td>
                <td className="px-4 py-2">{calcularTotales().sodio.toFixed(2)} mg</td>
                <td className="px-4 py-2">{calcularTotales().grasas.toFixed(2)} g</td>
                <td className="px-4 py-2">{calcularTotales().gramosTotales.toFixed(2)} g</td>
              </tr>
            </tbody>
          </table>
          <div className="mb-6 flex items-center gap-4 p-6 justify-center">
            <input
              type="text"
              placeholder="Nombre de la lista"
              value={nombreLista}
              onChange={(e) => setNombreLista(e.target.value)}
              className="w-full max-w-md border border-gray-300 rounded-lg p-2"
            />
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
