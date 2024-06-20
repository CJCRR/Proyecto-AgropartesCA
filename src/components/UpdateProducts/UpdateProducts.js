import React, { useState, useEffect } from 'react';
import { updateDoc, doc } from 'firebase/firestore';
import { productsCollection } from '../../utils/firebaseFetching';

const UpdateProducts = () => {
    const [productId, setProductId] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');
    const [stock, setStock] = useState(0);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const productRef = doc(productsCollection, productId);
            const updatedData = {
                title,
                description,
                price,
                category,
                image,
                stock,
            };

            await updateDoc(productRef, updatedData);
            console.log('Producto actualizado con éxito');
            // Restablecer los campos del formulario después de la actualización
            setProductId('');
            setTitle('');
            setDescription('');
            setPrice(0);
            setCategory('');
            setImage('');
            setStock(0);
        } catch (error) {
            console.error('Error al actualizar el producto:', error);
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
                    required
                />
            </div>
            <div className='col boxAdd'>
                <label htmlFor="price">Precio:</label>
                <input
                    type="number"
                    id="price"
                    value={price}
                    onChange={(e) => setPrice(parseFloat(e.target.value))}
                    required
                />
            </div>
            <div className='col boxAdd'>
                <label htmlFor="category">Categoría:</label>
                <input
                    type="text"
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                />
            </div>
            <div className='col boxAdd'>
                <label htmlFor="stock">Stock:</label>
                <input
                    type="number"
                    id="stock"
                    value={stock}
                    onChange={(e) => setStock(parseInt(e.target.value))}
                    required
                />
            </div>
            <div className='col boxAdd'>
                <label htmlFor="image">URL de la imagen:</label>
                <input
                    type="text"
                    id="image"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    required
                />
            </div>
            <div className='boxAdd'>
                <label htmlFor="description">Descripción:</label>
                <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                ></textarea>
            </div>
            <button className='buttonUpdate' type="submit">Actualizar Producto</button>
        </form>
    );
};

export default UpdateProducts;


