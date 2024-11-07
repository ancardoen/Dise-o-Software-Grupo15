"use client"
import { useState } from "react";
import Link from 'next/link'

export default function Home() {
    const [counter, setCounter] = useState(1);
    const [car1,setCar1]  = useState(0);
    const [car2,setCar2]  = useState(0);
    const [car3,setCar3]  = useState(0);
    const [car4,setCar4]  = useState(0);
    const [car5,setCar5]  = useState(0);
    const [car6,setCar6]  = useState(0);
   
    function handlerGuardar(){
    // Definimos el array coleccion dentro de la función
    const coleccion = [car1, car2, car3, car4, car5, car6];
    console.log(coleccion);
    // Obtiene las colecciones existentes o un array vacío si es la primera colección
    const items = JSON.parse(localStorage.getItem("Colections")) || [];
    // Crea la nueva colección con el nombre y los valores de "coleccion"
    const newCollection = { name: `Collection ${counter}`, values: coleccion };
    // Guarda la lista de colecciones actualizada en el localStorage
    const updatedItems = [...items, newCollection];
    localStorage.setItem("Colections", JSON.stringify(updatedItems));
    // Incrementa el contador para el próximo nombre de colección
    setCounter(counter + 1);    
    console.log(counter)
    }
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
                            <input id="calorias" type="float" onChange={e => {setCar1(e.target.value)}} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"/>
                        </div>
                        <div>
                            <label>Azúcar (g)</label>
                            <input id="azucar" type="float" onChange={e => {setCar2(e.target.value)}} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"/>
                        </div>
                        <div>
                            <label>Proteínas (g)</label>
                            <input id="proteinas" type="float" onChange={e => {setCar3(e.target.value)}} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"/>
                        </div>
                        <div>
                            <label>Sodio (mg)</label>
                            <input id="sodio" type="float" onChange={e => {setCar4(e.target.value)}} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"/>
                        </div>
                        <div>
                            <label>Grasas Totales (g)</label>
                            <input id="grasas" type="float" onChange={e => {setCar5(e.target.value)}} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"/>
                        </div>
                        <div>
                            <label>Gramos Totales (g)</label>
                            <input id="gramos" type="float" onChange={e => {setCar6(e.target.value)}} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"/>
                        </div>
                        <div>
                            <Link href="/">
                                <button className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 border-b-4 border-red-700 hover:border-red-500 rounded">Cancelar</button>
                            </Link>
                        </div>
                        <div>
                            <button type="button" onClick={handlerGuardar} className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                                Guardar
                            </button>
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