import React, { useEffect, useState } from 'react';
import {useAuth0} from "@auth0/auth0-react";
import styles from './css/Profile.Module.css';
import {Container, Card, Row, Button, Col} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductCard from "./ProductCard";
import Footer from "../Footer";

const LoginButton = () => {
    const { user, isAuthenticated }  = useAuth0();

    const [productos, setProductos] = useState([]);

    const getProducts = async () => {
        const resp = await fetch('http://127.0.0.1:8000/listProducts');
        const data = await resp.json();
        setProductos(data.productos);
        console.log(data.productos);
    }

    useEffect(() => {
        getProducts();
    }, []);

    // Comprobamos el estado de autenticación del usuario
    if(isAuthenticated) {
        return(
            <Container>
                <Row style={{ display: 'flex', justifyContent: 'space-between' }}>
                    {productos.map(producto => (
                        <ProductCard key={producto.productoId}
                                     title={producto.nombre}
                                     price={producto.precio}
                                     cat={producto.tipo}
                        />
                    ))}
                </Row>
            </Container>
        );

    } else if(!isAuthenticated) {
        return(
            <Container fluid>
                <div className={styles.mainContainer}>
                    <div className={styles.mainContainerContent}>
                        <Row>
                            {productos.map(producto => (
                                <Card key={producto.productoId} style={{width: '18rem', margin: '10px 15px'}}>
                                    <Card.Body>
                                        <Card.Title>
                                            {producto.nombre}
                                        </Card.Title>

                                        <Card.Text>
                                            <small>{producto.precio} €</small>
                                            <Button href={`/productos/${producto.tipo}`}>
                                                Ver más de esta categoría
                                            </Button>
                                        </Card.Text>

                                    </Card.Body>
                                </Card>
                            ))}
                        </Row>

                    </div>
                </div>
            </Container>
        )
    }
}

export default LoginButton;
