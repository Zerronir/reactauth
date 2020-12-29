import React from 'react';
import {useAuth0} from "@auth0/auth0-react";
import styles from "./css/header.module.css";
import {Nav} from 'react-bootstrap';
import logo from "./img/logo.jpg";

const Header = () => {
    const {user, isAuthenticated, loginWithRedirect, logout} = useAuth0();

    if(isAuthenticated) {
        return (
            <Nav className={styles.navContainer}>
                <Nav.Item>
                    <Nav.Link className={styles.navLink} href="/">Inicio</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className={styles.navLink} href="/productos">Productos</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className={styles.navLink} href="/quienes-somos">Quiénes Somos</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className={styles.navLink} href="/productos">Categorías</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className={styles.navLink}>|</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className={styles.navLink} href="/perfil">
                        {user.given_name}
                    </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className={styles.navLink} onClick={() => logout()}>
                        Salir
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        )
    } else {
        return (
            <Nav className={styles.navContainer}>
                <Nav.Item>
                    <Nav.Link className={styles.navLink} href="/">Inicio</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className={styles.navLink} href="/productos">Productos</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className={styles.navLink} href="/quienes-somos">Quiénes Somos</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className={styles.navLink} href="/productos">Categorías</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className={styles.navLink}>|</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className={styles.navLink} href="/perfil" onClick={() => loginWithRedirect()}>
                        Iniciar sesión
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        )
    }

}

export default Header;
