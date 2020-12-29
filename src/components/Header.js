import React from 'react';
import {useAuth0} from "@auth0/auth0-react";
import styles from "./css/header.module.css";

import logo from "./img/logo.jpg";

const Header = () => {
    const {user, isAuthenticated, loginWithRedirect, logout} = useAuth0();

    if(isAuthenticated) {
        return (
            <header className={styles.header}>

                <div>
                    <a href="/"><img src={logo} alt=""/></a>
                </div>

                <nav>
                    <ul>
                        <li><a href="/productos/mascarillas" className={styles.navLinks}>Mascarillas</a></li>
                        <li><a href="/productos/pantalones" className={styles.navLinks}>Ropa</a></li>
                        <li><a href="/productos/bolsas" className={styles.navLinks}>Bolsas</a></li>
                        <li><a href="/productos/basicos">Básicos</a></li>
                    </ul>
                </nav>

                <div>
                    <a href="/perfil">{user.given_name}</a>
                    <a href="/logout" onClick={() => logout()}>Salir</a>
                </div>

            </header>
        )
    } else {
        return (
            <header className={styles.header}>

                <div>
                    <a href="/"><img src={logo} alt=""/></a>
                </div>

                <nav>
                    <ul>
                        <li><a href="/productos/mascarillas" className={styles.navLinks}>Mascarillas</a></li>
                        <li><a href="/productos/pantalones" className={styles.navLinks}>Ropa</a></li>
                        <li><a href="/productos/bolsas" className={styles.navLinks}>Bolsas</a></li>
                        <li><a href="/productos/basicos">Básicos</a></li>
                    </ul>
                </nav>

                <div>
                    <a href="/login" onClick={() => loginWithRedirect()}>Iniciar sesión</a>
                </div>

            </header>
        )
    }

}

export default Header;
