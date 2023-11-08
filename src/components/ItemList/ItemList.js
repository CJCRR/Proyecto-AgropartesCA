import React from "react";
import Item from "../Item/Item";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const ItemList = ({ products, category }) => {
  return (
    <>
      <Header showAs="Shadow" />
      <h1 className="products__path">TODOS LOS PRODUCTOS</h1>

      <div className="products row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-2 ">
        {products &&
          products.map((product) => {
            return <Item key={product.id} product={product} />;
          })}
      </div>
      <Footer />

    </>
  );
};

export default ItemList;
