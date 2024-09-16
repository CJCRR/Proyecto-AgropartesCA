import React, { useState, useEffect } from 'react';
import { updateDoc, doc } from 'firebase/firestore';
import { productsCollection } from '../../utils/firebaseFetching';

const UpdateProducts = () => {
    const [productId, setProductId] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [category, setCategory] = useState('');
    const [subCategory, setSubCategory] = useState('');
    const [image, setImage] = useState('');
    const [stock, setStock] = useState(0);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const updatedData = {};

        if (title !== '') {
            updatedData.title = title;
        }
        if (description !== '') {
            updatedData.description = description;
        }
        if (price !== 0) {
            updatedData.price = price;
        }
        if (category !== '') {
            updatedData.category = category;
        }
        if (subCategory !== '') {
            updatedData.subCategory = subCategory;
        }
        if (image !== '') {
            updatedData.image = image;
        }
        if (stock !== 0) {
            updatedData.stock = stock;
        }

        if (Object.keys(updatedData).length > 0) {
            try {
                const productRef = doc(productsCollection, productId);
                await updateDoc(productRef, updatedData);
                console.log('Producto actualizado con éxito');
                // Restablecer los campos del formulario después de la actualización
                setProductId('');
                setTitle('');
                setDescription('');
                setPrice(0);
                setCategory('');
                setSubCategory('');
                setImage('');
                setStock(0);
            } catch (error) {
                console.error('Error al actualizar el producto:', error);
            }
        } else {
            console.log('No hay cambios para actualizar');
        }
    };

    return (
        <form className='formAddUpdate row' onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="ID del producto"
                value={productId}
                onChange={(e) => setProductId(e.target.value)}
            />
            <div className='col boxAdd'>
                <label htmlFor="title">Título:</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    
                />
            </div>
            <div className='col boxAdd'>
                <label htmlFor="price">Precio:</label>
                <input
                    type="number"
                    id="price"
                    value={price}
                    onChange={(e) => setPrice(parseFloat(e.target.value))}
                    
                />
            </div>
            <div className='col boxAdd'>
                <label htmlFor="category">Categoría:</label>
                <input
                    type="text"
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    
                />
            </div>
            <div className='col boxAdd'>
                <label htmlFor="subCategory">SubCategory:</label>
                <input
                    type="text"
                    id="subCategory"
                    value={subCategory}
                    onChange={(e) => setSubCategory(e.target.value)}
                    
                />
            </div>
            <div className='col boxAdd'>
                <label htmlFor="stock">Stock:</label>
                <input
                    type="number"
                    id="stock"
                    value={stock}
                    onChange={(e) => setStock(parseInt(e.target.value))}
                    
                />
            </div>
            <div className='col boxAdd'>
                <label htmlFor="image">URL de la imagen:</label>
                <input
                    type="text"
                    id="image"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    
                />
            </div>
            <div className='boxAdd'>
                <label htmlFor="description">Descripción:</label>
                <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    
                ></textarea>
            </div>
            <button className='buttonUpdate' type="submit">Actualizar Producto</button>
        </form>
    );
};

export default UpdateProducts;


