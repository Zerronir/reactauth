import React from 'react';
import {useAuth0} from "@auth0/auth0-react";
import styles from "./css/header.module.css";
import {Nav} from 'react-bootstrap';
import logo from "./img/logo.jpg";

const Header = () => {
    const {user, isAuthenticated, loginWithRedirect, logout} = useAuth0();

    if(isAuthenticated) {
        return (
            <Nav justify variant="tabs" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link href="/">Inicio</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/productos">Todos los productos</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled>
                        Disabled
                    </Nav.Link>
                </Nav.Item>
            </Nav>
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
