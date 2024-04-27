import React, { useState } from "react";
import Item from "../Item/Item";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const ItemList = ({ products = [] }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const itemsPerPage = 12; // Número de productos por página

  // Función para cambiar de página
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Función para manejar el cambio en el input de búsqueda
  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  // Filtrar los productos según el término de búsqueda
  const filteredProducts = products.filter((product) =>
    product?.title?.toLowerCase().includes(searchTerm)
  );

  // Calcular el número total de páginas
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  // Obtener los índices de los productos a mostrar en la página actual
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  // Renderizar los botones de paginación
  const renderPageNumbers = () => {
    const pageNumbers = [];

    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(
        <button
          key={i}
          className={`page-link ${currentPage === i ? "active" : ""}`}
          onClick={() => handlePageChange(i)}
        >
          {i}
        </button>
      );
    }

    return pageNumbers;
  };

  return (
    <div className="productGeneral">
      <Header showAs="Shadow" />
      <div className="search">
        <div>
          <h1 className="products__path">TODOS LOS PRODUCTOS</h1>
        </div>
        <div className="container-input">
          <input
            id="buscador"
            type="text"
            placeholder="Search"
            name="text"
            className="input me-2"
            value={searchTerm}
            onChange={handleSearch}
          />
          <svg fill="#000000" width="20px" height="20px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
            <path d="M790.588 1468.235c-373.722 0-677.647-303.924-677.647-677.647 0-373.722 303.925-677.647 677.647-677.647 373.723 0 677.647 303.925 677.647 677.647 0 373.723-303.924 677.647-677.647 677.647Zm596.781-160.715c120.396-138.692 193.807-319.285 193.807-516.932C1581.176 354.748 1226.428 0 790.588 0S0 354.748 0 790.588s354.748 790.588 790.588 790.588c197.647 0 378.24-73.411 516.932-193.807l516.028 516.142 79.963-79.963-516.142-516.028Z" fillRule="evenodd"></path>
          </svg>
        </div>
      </div>
      <div className="itemsContainer">
        <div className="products row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
          {currentItems.map((product) => (
            <Item key={product.id} product={product} />
          ))}
        </div>
        <div className="pagination">
          <button
            className="page-link"
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            Anterior
          </button>
          {renderPageNumbers()}
          <button
            className="page-link"
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            Siguiente
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ItemList;