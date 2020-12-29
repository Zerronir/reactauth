import React, { useEffect, useState } from 'react';
import {useAuth0} from "@auth0/auth0-react";
import styles from './css/Profile.Module.css';
import {Container, Card, Row, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import queryString from 'query-string'
import { useLocation } from 'react-router-dom'
import ProductCard from "./ProductCard";

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


            <Container>
                <h6>100% hechos a mano</h6>
                <h2>Categoria {tipo}</h2>
                <Row style={{ display: 'flex', justifyContent: 'space-between' }}>
                    {productos.map(producto => (
                        <ProductCard
                            key={producto.productoId}
                            title={producto.nombre}
                            price={producto.precio}
                            cat={producto.tipo}
                        />
                    ))}
                </Row>
            </Container>

        </div>
    )


}

export default ProductList;
