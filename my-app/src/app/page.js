"use client"
import { useTranslation } from 'next-i18next';
import React, { createContext } from 'react';
import LanguageSwitcher from "./LanguageSwitcher"

export default function Home() {
    const { t } = useTranslation('common');
    return (
        <div>
            <LanguageSwitcher />
            <main className="flex items-center justify-center min-h-screen bg-blue-50">
                <div className="w-full max-w-7xl p-8 bg-white shadow-md rounded-lg">
                <p>Bienvenido</p>
                <p>Descubre una forma fácil y personalizada de cuidar tu alimentación. Nuestra herramienta te ayuda a llevar un control detallado de tu dieta, ofreciéndote información nutricional precisa sobre los alimentos. Diseñada para que tomes decisiones saludables, nuestra aplicación te acompaña en cada paso hacia una vida más equilibrada y consciente.</p>
                <p>Empieza hoy mismo y transforma tu relación con la comida.</p>
                <p>(fotos, signin/empezar, info, estadisticas, quienes somos, )</p>
                </div>
            </main>
        </div>
    );
}