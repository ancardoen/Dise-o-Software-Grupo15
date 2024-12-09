"use client"
import { useState } from "react";
import Link from 'next/link'

export default function Home() {
    const [counter, setCounter] = useState(1);
    const [car0,setCar0]  = useState("");
    const [car1,setCar1]  = useState(0);
    const [car2,setCar2]  = useState(0);
    const [car3,setCar3]  = useState(0);
    const [car4,setCar4]  = useState(0);
    const [car5,setCar5]  = useState(0);
    const [car6,setCar6]  = useState(0);
    const [showMessage, setShowMessage] = useState(false);

    function handlerGuardar(){
        if (car0 && car1 && car2 && car3 && car4 && car5 && car6) {
            // Definimos el array coleccion dentro de la función
            const coleccion = [car0, car1, car2, car3, car4, car5, car6];
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
            setShowMessage(true); // Muestra el mensaje
            setTimeout(() => {
            setShowMessage(false); // Oculta el mensaje después de 3 segundos
            }, 3000);
        } else {alert("Todas los campos deben estar completados")}
    };
    function handleLimpiar(){
        setCar0("");
        setCar1("");
        setCar2("");
        setCar3("");
        setCar4("");
        setCar5("");
        setCar6("");
    }
    return (
        <div>
            <main className="flex items-center justify-center min-h-screen bg-blue-100">
                <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
                    <div className="text-center mb-6">
                        <p className="text-2xl font-bold text-gray-700">Ingrediente: {car0}</p>
                    </div>
                    <form>
                        <div>
                            <label>Nombre Ingrediente:</label>
                            <input id="nombre" type="text" onChange={e => {setCar0(e.target.value)}} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"/>
                        </div>
                    </form>
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
                        <div className="flex flex-row justify-between items-center space-x-12">
                            {/* Botón Cancelar */}
                            <Link href="/menu">
                                <button className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 hover:border-red-500 rounded">
                                Cancelar
                                </button>
                            </Link>
                            {/*bg-cyan-500 hover:bg-cyan-400 text-white font-bold py-2 px-4 hover:border-cyan-500 rounded*/}
                            {/* Botón Limpiar */}
                            <button 
                                className="bg-yellow-300 hover:bg-yellow-200 text-white font-bold py-2 px-4 rounded"
                                onClick={handleLimpiar}
                                >
                                Limpiar
                            </button>

                            {/* Botón Guardar */}
                            <div className="flex items-center space-x-2">
                                <button
                                type="button"
                                onClick={handlerGuardar}
                                className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 hover:border-blue-500 rounded"
                                >
                                Guardar
                                </button>
                                {showMessage && <p className="text-xl mt-2">✅</p>}
                            </div>
                        </div>

                    </form>
                    <a href="/como-calcular" className="justify-center text-blue-600 hover:text-blue-300">¿Cómo calcular los valores nutricionales? 👈</a>
                </div>
            </main>
        </div>
    );
}