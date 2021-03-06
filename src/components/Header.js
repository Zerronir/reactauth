import React from 'react';
import {useAuth0} from "@auth0/auth0-react";
import logo from './img/logo.jpg';

const Header = () => {
    const {user, isAuthenticated, loginWithRedirect, logout} = useAuth0();

    if(isAuthenticated) {
        return (
            <div>
                <div className="relative bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <div
                            className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                            <div className="flex justify-start lg:w-0 lg:flex-1">
                                <a href="/">
                                    <span className="sr-only">Sos Mamás</span>
                                    <img className="h-8 w-auto sm:h-10"
                                         src={logo} alt="" />
                                </a>
                            </div>
                            <div className="-mr-2 -my-2 md:hidden">
                                <button type="button"
                                        className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                    <span className="sr-only">Open menu</span>
                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                              d="M4 6h16M4 12h16M4 18h16"/>
                                    </svg>
                                </button>
                            </div>
                            <nav className="hidden md:flex space-x-10">
                                <a href="/productos" className="text-base font-medium text-gray-500 hover:text-gray-900">
                                    Productos
                                </a>

                                <a href="/quienes-somos" className="text-base font-medium text-gray-500 hover:text-gray-900">
                                    Quienes somos
                                </a>
                                <a href="/productos/covid" className="text-base font-medium text-gray-500 hover:text-gray-900">
                                    Covid-19
                                </a>

                                <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                                    Pricing
                                </a>
                            </nav>
                            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                                <a href="/perfil"
                                   className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                                    {user.given_name}
                                </a>
                                <a href="/doLogout" onClick={() => logout()}
                                   className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-600 hover:bg-indigo-700">
                                    Cerrar sesión
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <div className="relative bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6">
                        <div
                            className="flex justify-between items-center border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
                            <div className="flex justify-start lg:w-0 lg:flex-1">
                                <a href="/">
                                    <span className="sr-only">Sos Mamás</span>
                                    <img className="h-8 w-auto sm:h-10"
                                         src={logo} alt="" />
                                </a>
                            </div>
                            <div className="-mr-2 -my-2 md:hidden">
                                <button type="button"
                                        className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                    <span className="sr-only">Open menu</span>
                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                              d="M4 6h16M4 12h16M4 18h16"/>
                                    </svg>
                                </button>
                            </div>
                            <nav className="hidden md:flex space-x-10">
                                <a href="/productos" className="text-base font-medium text-gray-500 hover:text-gray-900">
                                    Productos
                                </a>

                                <a href="/quienes-somos" className="text-base font-medium text-gray-500 hover:text-gray-900">
                                    Quienes somos
                                </a>
                                <a href="/productos/covid" className="text-base font-medium text-gray-500 hover:text-gray-900">
                                    Covid-19
                                </a>

                                <a href="#" className="text-base font-medium text-gray-500 hover:text-gray-900">
                                    Pricing
                                </a>
                            </nav>
                            <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                                <a href="/perfil" onClick={() => loginWithRedirect()}
                                   className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900">
                                    Iniciar Sesión
                                </a>
                                <a href="/" onClick={() => loginWithRedirect()}
                                   className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                                    Registrate!
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Header;
