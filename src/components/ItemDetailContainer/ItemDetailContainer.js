import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../utils/firebaseFetching";
import Item from "../Item/Item";
import Loader from "../Loader/Loader";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import ProductSlider from "../RandonProducts/RandomProducts";
import { Link, NavLink } from "react-router-dom";
import { ChevronRight } from 'react-bootstrap-icons';


const ItemDetailContainer = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState([]);

  const fetchProduct = async () => {
    const data = await getProductById(id);
    setProduct(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <>
      <Header showAs="Shadow" />
      {loading ? (
        <Loader />
      ) : (
        <div className="detail container">
          <header class="container">
            <h1>Detalles del Producto</h1>
            <ul class="breadcrumb">
              <a ><li><Link to="/" className="nav__link nav-link">Inicio</Link></li></a>
              <ChevronRight />
              <a ><li><NavLink to="/Productos" className="nav__link nav-item nav-link">Productos</NavLink></li></a>
              <ChevronRight />
              <a href="#" disabled><li>{product.title}</li></a>
            </ul>
          </header>
          <Item product={{ id, ...product }} showAs={"Detail"} />
          <div className=" container sliderRandomProducts">
            <ProductSlider />
          </div>
        </div>

      )}
      <Footer />
    </>
  );
};

export default ItemDetailContainer;
