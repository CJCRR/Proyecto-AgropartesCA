import React from "react";
import Item from "../Item/Item";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const ItemList = ({ products, category }) => {

  

  document.addEventListener("keyup", e => {
    if (e.target.matches("#buscador")) {
        const searchTerm = e.target.value.toUpperCase();
        const cardProductos = document.querySelectorAll(".cardContenedor");

        cardProductos.forEach(repuestos => {
            const repuestosText = repuestos.textContent.toUpperCase();
            repuestos.style.display = repuestosText.includes(searchTerm) ? "grid" : "none";
        });
    }
});


  return (
    <>
      <Header showAs="Shadow" />
      <div className="search">
        <div>
          <h1 className="products__path">TODOS LOS PRODUCTOS</h1>
        </div>
        <div className="container-input">
          <input id="buscador" type="text" placeholder="Search" name="text" className="input me-2" />
          <svg fill="#000000" width="20px" height="20px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
            <path d="M790.588 1468.235c-373.722 0-677.647-303.924-677.647-677.647 0-373.722 303.925-677.647 677.647-677.647 373.723 0 677.647 303.925 677.647 677.647 0 373.723-303.924 677.647-677.647 677.647Zm596.781-160.715c120.396-138.692 193.807-319.285 193.807-516.932C1581.176 354.748 1226.428 0 790.588 0S0 354.748 0 790.588s354.748 790.588 790.588 790.588c197.647 0 378.24-73.411 516.932-193.807l516.028 516.142 79.963-79.963-516.142-516.028Z" fill-rule="evenodd"></path>
          </svg>
        </div>
      </div>

      <div className="container products row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-2 ">
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
