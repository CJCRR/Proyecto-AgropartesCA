import React, { useState } from "react";
import Item from "../Item/Item";
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Row, Col, Form, Offcanvas, Accordion } from 'react-bootstrap';
import { CaretRight, ChevronRight, FilterLeft, Search } from 'react-bootstrap-icons';


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

  const navigate = useNavigate();

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

  const handleSubCategoryClick = (category, subCategory) => {
    // Redirige a la ruta de los productos de la subcategoría
    navigate(`/productos/category/${category}/sub/${subCategory}`);
  };

  const [showSidebar, setShowSidebar] = useState(false);

  const handleSidebar = () => setShowSidebar(!showSidebar);

  return (
    <div className="productGeneral">
      <Header showAs="Shadow" />
      <header class="container">
        <h1>Todos los Productos</h1>
        <ul class="breadcrumb">
          <a ><li><Link to="/" className="nav__link nav-link">Inicio</Link></li></a>
          <ChevronRight />
          <a href="#" disabled><li>Productos</li></a>
        </ul>
      </header>
      <div className="search">
        <div>
          <button onClick={handleSidebar} className="filter-btn"><FilterLeft className="filterIcon" /></button>
        </div>
        <div className="container-input products__path">
          <Search className="lupa" />
          <input id="buscador" class="input me-2" name="text" placeholder="Search" type="text" value={searchTerm} onChange={handleSearch} />
        </div>
      </div>
      <div className="itemsContainer container">
        <Row>
          <Col md={3} className="container">
            <div className=" container sidebar d-none d-md-block">
              <h1 className="products__path">Filtros</h1>
              <Form>
                <Accordion>
                  <Accordion.Item eventKey="0">
                    <Accordion.Header>
                      <Form.Label><NavLink to="/Productos" className="nav__link nav-link">TODOS</NavLink></Form.Label>
                    </Accordion.Header>
                  </Accordion.Item>
                </Accordion>
                <Accordion>
                  <Accordion.Item eventKey="1">
                    <Accordion.Header>
                      <Form.Label>FILTROS</Form.Label>
                    </Accordion.Header>
                    <Accordion.Body>
                      <ul className="breadcrumb">
                        <li><CaretRight /></li>
                        <a><li>Aire</li></a>
                      </ul>
                      <ul className="breadcrumb">
                        <li><CaretRight /></li>
                        <a><li>Combustible</li></a>
                      </ul>
                      <ul className="breadcrumb">
                        <li><CaretRight /></li>
                        <a><li>Aceite</li></a>
                      </ul>
                      <ul className="breadcrumb">
                        <li><CaretRight /></li>
                        <a><li>Separador</li></a>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <Accordion>
                  <Accordion.Item eventKey="2">
                    <Accordion.Header>
                      <Form.Label>ISUZU</Form.Label>
                    </Accordion.Header>
                    <Accordion.Body>
                      <ul className="breadcrumb">
                        <li><CaretRight /></li>
                        <li style={{ cursor: 'pointer' }} onClick={() => handleSubCategoryClick('ISUZU', 'Clutch')} >Clutch</li>
                      </ul>
                      <ul className="breadcrumb">
                        <li><CaretRight /></li>
                        <li style={{ cursor: 'pointer' }} onClick={() => handleSubCategoryClick('ISUZU', 'Frenos')} >Frenos</li>
                      </ul>
                      <ul className="breadcrumb">
                        <li><CaretRight /></li>
                        <li style={{ cursor: 'pointer' }} onClick={() => handleSubCategoryClick('ISUZU', 'Filtros')} >Filtros</li>
                      </ul>
                      <ul className="breadcrumb">
                        <li><CaretRight /></li>
                        <li style={{ cursor: 'pointer' }} onClick={() => handleSubCategoryClick('ISUZU', 'Inyeccion')} >Inyección</li>
                      </ul>
                      <ul className="breadcrumb">
                        <li><CaretRight /></li>
                        <li style={{ cursor: 'pointer' }} onClick={() => handleSubCategoryClick('ISUZU', 'Motor')} >Motor</li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <Accordion>
                  <Accordion.Item eventKey="3">
                    <Accordion.Header>
                      <Form.Label>TOYOTA</Form.Label>
                    </Accordion.Header>
                    <Accordion.Body>
                      <ul className="breadcrumb">
                        <li><CaretRight /></li>
                        <li style={{ cursor: 'pointer' }} onClick={() => handleSubCategoryClick('TOYOTA', 'Clutch')} >Clutch</li>
                      </ul>
                      <ul className="breadcrumb">
                        <li><CaretRight /></li>
                        <li style={{ cursor: 'pointer' }} onClick={() => handleSubCategoryClick('TOYOTA', 'Frenos')} >Frenos</li>
                      </ul>
                      <ul className="breadcrumb">
                        <li><CaretRight /></li>
                        <li style={{ cursor: 'pointer' }} onClick={() => handleSubCategoryClick('TOYOTA', 'Filtros')} >Filtros</li>
                      </ul>
                      <ul className="breadcrumb">
                        <li><CaretRight /></li>
                        <li style={{ cursor: 'pointer' }} onClick={() => handleSubCategoryClick('TOYOTA', 'Inyeccion')} >Inyección</li>
                      </ul>
                      <ul className="breadcrumb">
                        <li><CaretRight /></li>
                        <li style={{ cursor: 'pointer' }} onClick={() => handleSubCategoryClick('TOYOTA', 'Motor')} >Motor</li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <Accordion>
                  <Accordion.Item eventKey="4">
                    <Accordion.Header>
                      <Form.Label>MITSUBISHI</Form.Label>
                    </Accordion.Header>
                    <Accordion.Body>
                      <ul className="breadcrumb">
                        <li><CaretRight /></li>
                        <li style={{ cursor: 'pointer' }} onClick={() => handleSubCategoryClick('MITSUBISHI', 'Clutch')} >Clutch</li>
                      </ul>
                      <ul className="breadcrumb">
                        <li><CaretRight /></li>
                        <li style={{ cursor: 'pointer' }} onClick={() => handleSubCategoryClick('MITSUBISHI', 'Frenos')} >Frenos</li>
                      </ul>
                      <ul className="breadcrumb">
                        <li><CaretRight /></li>
                        <li style={{ cursor: 'pointer' }} onClick={() => handleSubCategoryClick('MITSUBISHI', 'Filtros')} >Filtros</li>
                      </ul>
                      <ul className="breadcrumb">
                        <li><CaretRight /></li>
                        <li style={{ cursor: 'pointer' }} onClick={() => handleSubCategoryClick('MITSUBISHI', 'Inyeccion')} >Inyección</li>
                      </ul>
                      <ul className="breadcrumb">
                        <li><CaretRight /></li>
                        <li style={{ cursor: 'pointer' }} onClick={() => handleSubCategoryClick('MITSUBISHI', 'Motor')} >Motor</li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <Accordion>
                  <Accordion.Item eventKey="5">
                    <Accordion.Header>
                      <Form.Label>CUMMINS</Form.Label>
                    </Accordion.Header>
                    <Accordion.Body>
                      <ul className="breadcrumb">
                        <li><CaretRight /></li>
                        <li style={{ cursor: 'pointer' }} onClick={() => handleSubCategoryClick('CUMMINS', 'Clutch')} >Clutch</li>
                      </ul>
                      <ul className="breadcrumb">
                        <li><CaretRight /></li>
                        <li style={{ cursor: 'pointer' }} onClick={() => handleSubCategoryClick('CUMMINS', 'Frenos')} >Frenos</li>
                      </ul>
                      <ul className="breadcrumb">
                        <li><CaretRight /></li>
                        <li style={{ cursor: 'pointer' }} onClick={() => handleSubCategoryClick('CUMMINS', 'Filtros')} >Filtros</li>
                      </ul>
                      <ul className="breadcrumb">
                        <li><CaretRight /></li>
                        <li style={{ cursor: 'pointer' }} onClick={() => handleSubCategoryClick('CUMMINS', 'Inyeccion')} >Inyección</li>
                      </ul>
                      <ul className="breadcrumb">
                        <li><CaretRight /></li>
                        <li style={{ cursor: 'pointer' }} onClick={() => handleSubCategoryClick('CUMMINS', 'Motor')} >Motor</li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
                <Accordion>
                  <Accordion.Item eventKey="6">
                    <Accordion.Header>
                      <Form.Label>HINO</Form.Label>
                    </Accordion.Header>
                    <Accordion.Body>
                      <ul className="breadcrumb">
                        <li><CaretRight /></li>
                        <li style={{ cursor: 'pointer' }} onClick={() => handleSubCategoryClick('HINO', 'Clutch')} >Clutch</li>
                      </ul>
                      <ul className="breadcrumb">
                        <li><CaretRight /></li>
                        <li style={{ cursor: 'pointer' }} onClick={() => handleSubCategoryClick('HINO', 'Frenos')} >Frenos</li>
                      </ul>
                      <ul className="breadcrumb">
                        <li><CaretRight /></li>
                        <li style={{ cursor: 'pointer' }} onClick={() => handleSubCategoryClick('HINO', 'Filtros')} >Filtros</li>
                      </ul>
                      <ul className="breadcrumb">
                        <li><CaretRight /></li>
                        <li style={{ cursor: 'pointer' }} onClick={() => handleSubCategoryClick('HINO', 'Inyeccion')} >Inyección</li>
                      </ul>
                      <ul className="breadcrumb">
                        <li><CaretRight /></li>
                        <li style={{ cursor: 'pointer' }} onClick={() => handleSubCategoryClick('HINO', 'Motor')} >Motor</li>
                      </ul>
                    </Accordion.Body>
                  </Accordion.Item>
                </Accordion>
              </Form>
            </div>
          </Col>
          <Col md={9}>
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
          </Col>
        </Row>
        <Offcanvas className="offcanvas" show={showSidebar} onHide={handleSidebar} placement="start">

          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Filtros</Offcanvas.Title>
          </Offcanvas.Header>
          <Form>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  <Form.Label><NavLink to="/Poductos" className="nav__link nav-link">TODOS</NavLink></Form.Label>
                </Accordion.Header>
              </Accordion.Item>
            </Accordion>
            <Accordion>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  <Form.Label>FILTROS</Form.Label>
                </Accordion.Header>
                <Accordion.Body>
                  <ul className="breadcrumb">
                    <li><CaretRight /></li>
                    <a><li>Aire</li></a>
                  </ul>
                  <ul className="breadcrumb">
                    <li><CaretRight /></li>
                    <a><li>Combustible</li></a>
                  </ul>
                  <ul className="breadcrumb">
                    <li><CaretRight /></li>
                    <a><li>Aceite</li></a>
                  </ul>
                  <ul className="breadcrumb">
                    <li><CaretRight /></li>
                    <a><li>Separador</li></a>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  <Form.Label>ISUZU</Form.Label>
                </Accordion.Header>
                <Accordion.Body>
                  <ul className="breadcrumb">
                    <li><CaretRight /></li>
                    <li style={{ cursor: 'pointer' }} onClick={() => handleSubCategoryClick('ISUZU', 'Cluth')} >Cluth</li>
                  </ul>
                  <ul className="breadcrumb">
                    <li><CaretRight /></li>
                    <li style={{ cursor: 'pointer' }} onClick={() => handleSubCategoryClick('ISUZU', 'Frenos')} >Frenos</li>
                  </ul>
                  <ul className="breadcrumb">
                    <li><CaretRight /></li>
                    <li style={{ cursor: 'pointer' }} onClick={() => handleSubCategoryClick('ISUZU', 'Filtros')} >Filtros</li>
                  </ul>
                  <ul className="breadcrumb">
                    <li><CaretRight /></li>
                    <li style={{ cursor: 'pointer' }} onClick={() => handleSubCategoryClick('ISUZU', 'Inyeccion')} >Inyección</li>
                  </ul>
                  <ul className="breadcrumb">
                    <li><CaretRight /></li>
                    <li style={{ cursor: 'pointer' }} onClick={() => handleSubCategoryClick('ISUZU', 'Motor')} >Motor</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  <Form.Label>TOYOTA</Form.Label>
                </Accordion.Header>
                <Accordion.Body>
                  <ul className="breadcrumb">
                    <li><CaretRight /></li>
                    <li style={{ cursor: 'pointer' }} onClick={() => handleSubCategoryClick('TOYOTA', 'Clutch')} >Clutch</li>
                  </ul>
                  <ul className="breadcrumb">
                    <li><CaretRight /></li>
                    <li style={{ cursor: 'pointer' }} onClick={() => handleSubCategoryClick('TOYOTA', 'Frenos')} >Frenos</li>
                  </ul>
                  <ul className="breadcrumb">
                    <li><CaretRight /></li>
                    <li style={{ cursor: 'pointer' }} onClick={() => handleSubCategoryClick('TOYOTA', 'Filtros')} >Filtros</li>
                  </ul>
                  <ul className="breadcrumb">
                    <li><CaretRight /></li>
                    <li style={{ cursor: 'pointer' }} onClick={() => handleSubCategoryClick('TOYOTA', 'Inyeccion')} >Inyección</li>
                  </ul>
                  <ul className="breadcrumb">
                    <li><CaretRight /></li>
                    <li style={{ cursor: 'pointer' }} onClick={() => handleSubCategoryClick('TOYOTA', 'Motor')} >Motor</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  <Form.Label>MITSUBISHI</Form.Label>
                </Accordion.Header>
                <Accordion.Body>
                  <ul className="breadcrumb">
                    <li><CaretRight /></li>
                    <li style={{ cursor: 'pointer' }} onClick={() => handleSubCategoryClick('MITSUBISHI', 'Clutch')} >Clutch</li>
                  </ul>
                  <ul className="breadcrumb">
                    <li><CaretRight /></li>
                    <li style={{ cursor: 'pointer' }} onClick={() => handleSubCategoryClick('MITSUBISHI', 'Frenos')} >Frenos</li>
                  </ul>
                  <ul className="breadcrumb">
                    <li><CaretRight /></li>
                    <li style={{ cursor: 'pointer' }} onClick={() => handleSubCategoryClick('MITSUBISHI', 'Filtros')} >Filtros</li>
                  </ul>
                  <ul className="breadcrumb">
                    <li><CaretRight /></li>
                    <li style={{ cursor: 'pointer' }} onClick={() => handleSubCategoryClick('MITSUBISHI', 'Inyeccion')} >Inyección</li>
                  </ul>
                  <ul className="breadcrumb">
                    <li><CaretRight /></li>
                    <li style={{ cursor: 'pointer' }} onClick={() => handleSubCategoryClick('MITSUBISHI', 'Motor')} >Motor</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion>
              <Accordion.Item eventKey="5">
                <Accordion.Header>
                  <Form.Label>CUMMINS</Form.Label>
                </Accordion.Header>
                <Accordion.Body>
                  <ul className="breadcrumb">
                    <li><CaretRight /></li>
                    <li style={{ cursor: 'pointer' }} onClick={() => handleSubCategoryClick('CUMMINS', 'Cluth')} >Cluth</li>
                  </ul>
                  <ul className="breadcrumb">
                    <li><CaretRight /></li>
                    <li style={{ cursor: 'pointer' }} onClick={() => handleSubCategoryClick('CUMMINS', 'Frenos')} >Frenos</li>
                  </ul>
                  <ul className="breadcrumb">
                    <li><CaretRight /></li>
                    <li style={{ cursor: 'pointer' }} onClick={() => handleSubCategoryClick('CUMMINS', 'Filtros')} >Filtros</li>
                  </ul>
                  <ul className="breadcrumb">
                    <li><CaretRight /></li>
                    <li style={{ cursor: 'pointer' }} onClick={() => handleSubCategoryClick('CUMMINS', 'Inyeccion')} >Inyección</li>
                  </ul>
                  <ul className="breadcrumb">
                    <li><CaretRight /></li>
                    <li style={{ cursor: 'pointer' }} onClick={() => handleSubCategoryClick('CUMMINS', 'Motor')} >Motor</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            <Accordion>
              <Accordion.Item eventKey="6">
                <Accordion.Header>
                  <Form.Label>HINO</Form.Label>
                </Accordion.Header>
                <Accordion.Body>
                  <ul className="breadcrumb">
                    <li><CaretRight /></li>
                    <li style={{ cursor: 'pointer' }} onClick={() => handleSubCategoryClick('HINO', 'Clutch')} >Clutch</li>
                  </ul>
                  <ul className="breadcrumb">
                    <li><CaretRight /></li>
                    <li style={{ cursor: 'pointer' }} onClick={() => handleSubCategoryClick('HINO', 'Frenos')} >Frenos</li>
                  </ul>
                  <ul className="breadcrumb">
                    <li><CaretRight /></li>
                    <li style={{ cursor: 'pointer' }} onClick={() => handleSubCategoryClick('HINO', 'Filtros')} >Filtros</li>
                  </ul>
                  <ul className="breadcrumb">
                    <li><CaretRight /></li>
                    <li style={{ cursor: 'pointer' }} onClick={() => handleSubCategoryClick('HINO', 'Inyeccion')} >Inyección</li>
                  </ul>
                  <ul className="breadcrumb">
                    <li><CaretRight /></li>
                    <li style={{ cursor: 'pointer' }} onClick={() => handleSubCategoryClick('HINO', 'Motor')} >Motor</li>
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Form>
        </Offcanvas>
      </div>
      <Footer />
    </div>
  );
};

export default ItemList;