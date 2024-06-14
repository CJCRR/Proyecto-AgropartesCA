import React, { useState } from 'react';
import { addDoc } from 'firebase/firestore';
import { productsCollection } from '../../utils/firebaseFetching';

const FormAddProducts = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [id, setId] = useState('');
    const [price, setPrice] = useState(0);
    const [category, setCategory] = useState('');
    const [image, setImage] = useState('');
    const [stock, setStock] = useState(0);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const newProduct = {
                title,
                description,
                id,
                price,
                category,
                image,
                stock,
            };

            const docRef = await addDoc(productsCollection, newProduct);
            console.log('Producto agregado con ID:', docRef.id);
            // Restablecer los campos del formulario después de agregar el producto
            setTitle('');
            setDescription('');
            setId('');
            setIndexConfiguration('');
            setPrice(0);
            setCategory('');
            setImage('');
            setStock(0);
        } catch (error) {
            console.error('Error al agregar el producto:', error);
        }
    };

    return (
        <form className='formAddUpdate' onSubmit={handleSubmit}>
            <div>
                <label htmlFor="title">Título:</label>
                <input
                    type="text"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="description">Descripción:</label>
                <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                ></textarea>
            </div>
            <div>
                <label htmlFor="id">Id:</label>
                <input
                    type="text"
                    id="id"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="price">Precio:</label>
                <input
                    type="number"
                    id="price"
                    value={price}
                    onChange={(e) => setPrice(parseFloat(e.target.value))}
                    required
                />
            </div>
            <div>
                <label htmlFor="category">Categoría:</label>
                <input
                    type="text"
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="image">URL de la imagen:</label>
                <input
                    type="text"
                    id="image"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="stock">Stock:</label>
                <input
                    type="number"
                    id="stock"
                    value={stock}
                    onChange={(e) => setStock(parseInt(e.target.value))}
                    required
                />
            </div>
            <button type="submit">Agregar Producto</button>
        </form>
    );
};

export default FormAddProducts;
