"use client"
import Link from 'next/link';
import { useState,useEffect } from 'react';

export default function Home() {
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');
    const [contrasena1, setContrasena1] = useState('');
    const [contrasena2, setContrasena2] = useState('');
    const [mensaje, setMensaje] = useState('');

    // Este useEffect se activa cada vez que 'mensaje' cambia
    useEffect(() => {
        if (mensaje) {
        const timer = setTimeout(() => {
            setMensaje('');
        }, 5000);

        // Limpiar el temporizador si el componente se desmonta antes de los 5 segundos
        return () => clearTimeout(timer);
        }
    }, [mensaje]);

    const handleSubmit = async (e) => {
        e.preventDefault();
            // Verificar si algún campo está vacío
        if (!nombre || !correo || !contrasena1 || !contrasena2) {
            setMensaje('Por favor, llena todos los campos.');
            return;
        }
        if (contrasena1 !== contrasena2) {
            setMensaje('Las contraseñas no coinciden');
            return;
          }
          try {
            const response = await fetch('http://localhost:5000/signup', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ nombre, correo, contrasena: contrasena1 }),
            });
      
            const data = await response.json();
      
            if (response.ok) {
              setMensaje(data.message);
              setNombre('');
              setCorreo('');
              setContrasena1('');
              setContrasena2('');
            } else {
              setMensaje('Error al registrar el usuario.');
            }
          } catch (error) {
            console.error('Error:', error);
            setMensaje('Error al conectar con el servidor.');
          }
        };

    return (
        <div>
            <main className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
                    <div className="text-center mb-6">
                        <p className="text-2xl font-bold text-gray-700">Signup</p>
                    </div>
                    <form className="space-y-4">
                        <div>
                            <label className="block mb-1 text-gray-700 font-medium">Elige lenguaje preferido</label>
                            <select id="lenguaje" name="options" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none">
                                <option value="esp">Español</option>
                                <option value="eng">English</option>
                            </select>
                        </div>
                        <div>
                            <label className="block mb-1 text-gray-700 font-medium">Nombre de Usuario</label>
                            <input id="name" type="text" placeholder="Coloca tu nombre" onChange={e=>setNombre(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"/>
                        </div>
                        <div>
                            <label className="block mb-1 text-gray-700 font-medium">Correo</label>
                            <input id="mail" type="text" placeholder="Inserta tu Correo" onChange={e=>setCorreo(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"/>
                        </div>
                        <div>
                            <label className="block mb-1 text-gray-700 font-medium">Contraseña</label>
                            <input id="password" type="password" placeholder="Crea una Contraseña" onChange={e=>setContrasena1(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"/>
                        </div>
                        <div>
                            <label className="block mb-1 text-gray-700 font-medium">Confirmar Contraseña</label>
                            <input id="password" type="password" placeholder="Confirma tu Contraseña" onChange={e=>setContrasena2(e.target.value)} className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"/>
                        </div>
                        {mensaje && <p className="text-red-500">{mensaje}</p>}
                        <div className="flex justify-between">
                            <Link href="/login">
                                <button type="submit" className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
                                    Ir a Log in
                                </button>
                            </Link>
                            <button type="submit" onClick={handleSubmit} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                                Signup
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