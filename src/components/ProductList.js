import React, { useEffect, useState } from 'react';
import {useAuth0} from "@auth0/auth0-react";
import styles from './css/Profile.Module.css';
import {Container, Card, Row, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import queryString from 'query-string'
import { useLocation } from 'react-router-dom'

const ProductList = ({match}) => {
    const { user }  = useAuth0();
    const {search} = useLocation();
    const values = queryString.parse(search);
    const tipo = match.params.tipo;
    const prepurl = `http://127.0.0.1:8000/listProductos/${tipo}`;

    const [productos, setProductos] = useState([]);

    console.log(prepurl);

    const getProducts = async () => {
        const resp = await fetch(prepurl);
        const data = await resp.json();
        setProductos(data.productos);
        console.log(data.productos)
    }

    useEffect(() => {
        getProducts();
    }, []);

    return (
        <div>
            Categoria {tipo}

            <Container>
                <Row>
                    {productos.map(producto => (
                        <Card>
                            <Card.Title>
                                {producto.nombre}
                            </Card.Title>
                            <Card.Text>
                                {producto.precio} €
                            </Card.Text>
                        </Card>
                    ))}
                </Row>
            </Container>

        </div>
    )


}

export default ProductList;
