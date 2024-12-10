"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
    const [correo, setCorreo] = useState('');
    const [contrasena, setContrasena] = useState('');
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
        try {
            console.log("ENVIO:");
            console.log("username: " + usuario);
            console.log("contrasena: " + contrasena);

            const response = await fetch('/api/validate_user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username: usuario, password: contrasena }),
            });

            const data = await response.json();

            if (response.ok) {
                setMensaje('Ingreso exitoso. ¡Bienvenido!');
                setUsuario('');
                setContrasena('');
                // Redirigir a la página de inicio
                window.location.href = '/';
            } else {
                // Si hay un mensaje de error del servidor, se muestra el mensaje de error en pantalla
                setMensaje(data.error || 'Error al registrar el usuario.');
            }
        } catch (error) {
            console.error('Error:', error);
            setMensaje('Error al conectar con el servidor.');
        }
    };

    return (
        <div>
            <main className="flex items-center justify-center min-h-screen bg-blue-100">
                <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
                    <div className="text-center mb-6">
                        <p className="text-2xl font-bold text-gray-700">Log in</p>
                    </div>
                    <form className="space-y-4" onSubmit={handleSubmit}>
                        {mensaje && (
                            <div className="text-red-500 text-center mb-4">
                                {mensaje}
                            </div>
                        )}
                        <div>
                            <input
                                id="mail"
                                type="text"
                                value={usuario}
                                onChange={(e) => setUsuario(e.target.value)}
                                placeholder="Username"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none" 
                            />
                        </div>
                        <div>
                            <input
                                id="password"
                                type="password"
                                value={contrasena}
                                onChange={(e) => setContrasena(e.target.value)}
                                placeholder="******"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none" 
                            />
                        </div>
                        <div className="flex justify-between">
                            <button 
                                type="submit" 
                                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                            >
                                Log in
                            </button>
                            <Link href="/signup">
                                <button 
                                    type="button" 
                                    className="px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-600"
                                >
                                    Ir a Sign-up
                                </button>
                            </Link>
                        </div>
                    </form>
                </div>
            </main>
        </div>
    );
}