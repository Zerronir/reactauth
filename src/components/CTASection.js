import React from 'react';
import '../index.css';

const CTASection = () => {
    return (
        <div className="bg-gray-50">
            <div
                className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                    <span className="block">Nos preocupamos por tu seguridad</span>
                    <span className="block text-indigo-600 text-2xl">Échales un vistazo a nuestros productos contra el covid-19.</span>
                </h2>
                <div className="mt-8 lex lg:mt-0 lg:flex-shrink-0">
                    <div className="inline-flex rounded-md shadow">
                        <a href="/productos/covid"
                           className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                            Ver Productos
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CTASection;
