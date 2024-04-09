import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import {
  getAllProducts,
  getProductsByCategory,
} from "../../utils/firebaseFetching";
import Loader from "../Loader/Loader";
import Pagination from '../Paginate/Paginate';

const ItemListContainer = () => {
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const { category } = useParams();

  const fetchProducts = async () => {
    const products = await getAllProducts();
    setItems(products);
    setLoading(false);
  };

  const fetchProductsByCategory = async (cat) => {
    const products = await getProductsByCategory(cat);
    setItems(products);
    setLoading(false);
  };

  useEffect(() => {
    category? fetchProductsByCategory(category) : fetchProducts();
  }, [category]);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      {loading? (
        <Loader />
      ) : (
        <>
          
          <ItemList
          products={currentItems}
          itemsPerPage={itemsPerPage}
          totalItems={items.length}
          paginate={setCurrentPage}
        />
        </>
      )}
    </>
  );
};

export default ItemListContainer;