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
                    info
                </div>
                <div className="w-full max-w-7xl p-8 bg-white shadow-md rounded-lg">
                    <h1>{t("como calcular")}</h1>
                </div>
            </main>
        </div>
    );
}