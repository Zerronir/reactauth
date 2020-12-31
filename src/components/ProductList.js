import React, { useEffect, useState } from 'react';
import {Container, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductCard from "./ProductCard";

const ProductList = ({match}) => {
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

    if(productos === undefined || productos.length === 0) {
        const outOfStock = "No hay productos de esta categoría";
        console.log(outOfStock);
    }

    return (
        <div>
            <Container>

            <div class="lg:flex lg:items-center lg:justify-between">
                <div class="flex-1 min-w-0">
                    <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">
                        <div className="mt-2 flex items-center text-sm text-gray-500">
                            Productos 100% hechos a mano
                        </div>
                    </div>
                    <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
                        Categoría: {tipo}
                    </h2>

                </div>
            </div>
                <Row style={{ display: 'flex', justifyContent: 'space-between' }}>
                    {productos.map(producto => (
                        <ProductCard
                            key={producto.productoId}
                            id={producto.productoId}
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
