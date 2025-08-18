import React, { useState, useEffect } from 'react';
import Item from '../../components/Item/Item';
import FormAddProducts from '../../components/FormAddProducts/FormAddProducts';
import UpdateProducts from '../../components/UpdateProducts/UpdateProducts';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { getAllProducts, deleteProduct, addProduct } from '../../utils/firebaseFetching';
import * as XLSX from 'xlsx';

const AddProducts = () => {
    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [uploading, setUploading] = useState(false);
    const [uploadError, setUploadError] = useState(null);
    const [uploadSuccess, setUploadSuccess] = useState(null);

    useEffect(() => {
        const fetchProducts = async () => {
            const productsData = await getAllProducts();
            setProducts(productsData);
            setFilteredProducts(productsData);
        };

        fetchProducts();
    }, []);

    const sortProductsAlphabetically = () => {
        const sortedProducts = [...filteredProducts].sort((a, b) => {
            let titleA = a.title ? a.title.toLowerCase() : '';
            let titleB = b.title ? b.title.toLowerCase() : '';
            if (titleA < titleB) return -1;
            if (titleA > titleB) return 1;
            return 0;
        });
        setFilteredProducts(sortedProducts);
    };

    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);
        if (query.trim() === '') {
            setFilteredProducts(products);
        } else {
            const filtered = products.filter((product) =>
                product.title.toLowerCase().includes(query.toLowerCase())
            );
            setFilteredProducts(filtered);
        }
    };

    const handleDeleteProduct = async (id) => {
        try {
            await deleteProduct(id);
            const updatedProducts = products.filter((product) => product.id !== id);
            setProducts(updatedProducts);
            const updatedFiltered = filteredProducts.filter((product) => product.id !== id);
            setFilteredProducts(updatedFiltered);
        } catch (error) {
            console.error('Error al eliminar el producto:', error);
        }
    };

    const handleFileUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        setUploading(true);
        setUploadError(null);
        setUploadSuccess(null);

        try {
            const data = await file.arrayBuffer();
            const workbook = XLSX.read(data);
            const sheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[sheetName];
            const jsonData = XLSX.utils.sheet_to_json(worksheet);

            // Asumiendo que jsonData es un array de objetos producto con campos compatibles
            for (const product of jsonData) {
                // Aquí puedes validar o transformar los campos del producto si es necesario
                await addProduct(product);
            }

            const productsData = await getAllProducts();
            setProducts(productsData);
            setFilteredProducts(productsData);
            setUploadSuccess('Productos cargados exitosamente.');
        } catch (error) {
            console.error('Error al cargar el archivo:', error);
            setUploadError('Error al cargar el archivo. Por favor verifica el formato.');
        } finally {
            setUploading(false);
            e.target.value = null; // Resetear input file
        }
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
                <div className="row">
                    <input
                        type="text"
                        placeholder="Buscar producto..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                        className="col"
                    />
                </div>
                <div className="row" style={{ marginTop: '10px', marginBottom: '10px' }}>
                    <input
                        type="file"
                        accept=".xls,.xlsx"
                        onChange={handleFileUpload}
                        disabled={uploading}
                    />
                    {uploading && <p>Cargando productos...</p>}
                    {uploadError && <p style={{ color: 'red' }}>{uploadError}</p>}
                    {uploadSuccess && <p style={{ color: 'green' }}>{uploadSuccess}</p>}
                </div>
                <div className="listProductsAddProducts">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => (
                            <Item
                                key={product.id}
                                product={product}
                                showAs="listAddProducts"
                                onDelete={handleDeleteProduct}
                            />
                        ))
                    ) : (
                        <p>No se encontraron productos.</p>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default AddProducts;
