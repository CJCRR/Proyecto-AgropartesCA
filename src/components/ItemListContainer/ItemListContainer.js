import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";

import {
  getAllProducts,
  getProductsByCategory,
} from "../../utils/firebaseFetching";
import Loader from "../Loader/Loader";

const ItemListContainer = () => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const { category } = useParams();

   // Función para obtener todos los productos
  const fetchProducts = async () => {
    const products = await getAllProducts();
    setItems(products);
    setLoading(false);
  };

  // Función para obtener productos por categoría
  const fetchProductsByCategory = async (cat) => {
    const products = await getProductsByCategory(cat);
    setItems(products);
    setLoading(false);
  };

  // Efecto para obtener los productos según la categoría
  useEffect(() => {
    category? fetchProductsByCategory(category) : fetchProducts();
  }, [category]);

  // Copia del array de items para evitar mutaciones
  const currentItems = items.slice();

  return (
    <>
      {loading? (
        <Loader />
      ) : (
        <>
          
          <ItemList
          products={currentItems}
          totalItems={items.length}
        />
        </>
      )}
    </>
  );
};

export default ItemListContainer;