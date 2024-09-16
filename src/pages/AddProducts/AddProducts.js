import React, { useState, useEffect } from 'react';
import Item from '../../components/Item/Item';
import FormAddProducts from '../../components/FormAddProducts/FormAddProducts';
import UpdateProducts from '../../components/UpdateProducts/UpdateProducts';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { getAllProducts } from '../../utils/firebaseFetching';

const AddProducts = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const productsData = await getAllProducts();
            setProducts(productsData);
        };

        fetchProducts();
    }, []);

    const sortProductsAlphabetically = () => {
        const sortedProducts = [...products].sort((a, b) => {
            let titleA = a.title ? a.title.toLowerCase() : '';
            let titleB = b.title ? b.title.toLowerCase() : '';
            if (titleA < titleB) return -1;
            if (titleA > titleB) return 1;
            return 0;
        });
        setFilteredProducts(sortedProducts);
    };


    return (
        <>
            <Header />
            <div className="container addAndUpdateProducts">
                <div className="row addAndUpdateProducts-1">
                    <div className="col addAndUpdateProducts-2">
                        <h1>AGREGAR PRODUCTO</h1>
                        <FormAddProducts />
                    </div>
                    <div className="col addAndUpdateProducts-2">
                        <h1>ACTUALIZAR PRODUCTO</h1>
                        <UpdateProducts />
                    </div>
                </div>

            </div>
            <div className="container">
                <div className="row">
                    <h2 className='col'>Lista de Productos</h2>
                    <button className='col' onClick={sortProductsAlphabetically}>A-Z</button>
                </div>

                <div className="listProductsAddProducts">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => (
                            <Item key={product.id} product={product} showAs="listAddProducts" />
                        ))
                    ) : (
                        products.map((product) => (
                            <Item key={product.id} product={product} showAs="listAddProducts" />
                        ))
                    )}
                </div>

            </div>
            <Footer />
        </>
    );
};

export default AddProducts;
