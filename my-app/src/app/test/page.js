"use client"
import { useTranslation } from 'next-i18next';
import React from 'react';
import i18next from 'i18next';

export default function Home() {
    const { t } = useTranslation("common"); /*Variable utilizada para traducir texto*/
    const handleLanguageChange = (lang) => {
        i18next.changeLanguage(lang); // Cambia el idioma dinámicamente
      };
    return (
        <div>
            <main className="flex items-center justify-center min-h-screen bg-blue-100">
                <div className="w-full max-w-7xl p-8 bg-white shadow-md rounded-lg">
                <button
                    onClick={() => handleLanguageChange('es')}
                    className="mr-4 p-2 bg-blue-500 text-white rounded"
                >
                    Español
                </button>
                <button
                    onClick={() => handleLanguageChange('en')}
                    className="p-2 bg-gray-500 text-white rounded"
                >
                    English
                </button>                
                <p>{t("Main.t1")}</p>
                <p>Descubre una forma fácil y personalizada de cuidar tu alimentación. Nuestra herramienta te ayuda a llevar un control detallado de tu dieta, ofreciéndote información nutricional precisa sobre los alimentos. Diseñada para que tomes decisiones saludables, nuestra aplicación te acompaña en cada paso hacia una vida más equilibrada y consciente.</p>
                <p>Empieza hoy mismo y transforma tu relación con la comida.</p>
                <p>(fotos, signin/empezar, info, estadisticas, quienes somos, )</p>
                </div>
            </main>
        </div>
    );
}