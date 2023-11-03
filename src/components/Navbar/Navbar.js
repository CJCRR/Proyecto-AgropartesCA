import React, { useState } from "react";
import CartWidgets from "../CartWidgets/CartWidgets";

import { Link, NavLink } from "react-router-dom";
import { getCategories } from "../../utils/firebaseFetching";
import { useEffect } from "react";

import NavDropdown from 'react-bootstrap/NavDropdown';


const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [categories, setCategories] = useState([]);
  const fetchCategories = async () => {
    const data = await getCategories();
    setCategories(data);
  };
  const handleOpen = () => {
    setOpen(!open);
  };
  const handleLeave = () => {
    setOpen(false);
  };

  useEffect(() => {
    fetchCategories();
  }, []);
  return (
    
    <nav className="header__nav navbar  navbar-expand-lg ">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <CartWidgets />
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav__link nav-link">INICIO</Link>
            </li>
            <li className="nav-item">
              <NavLink to="/shop" className="nav__link nav-item nav-link">TODOS</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/Nosotros" className="nav__link nav-link">NOSOTROS</NavLink>
            </li>
            <NavDropdown className="nav__link nav-item" title="CATEGORIAS" id="collapsible-nav-dropdown" onClick={handleOpen}>
            <div className="navCategory nav-link">
              {categories && categories.map((category) => {
                return (
                  <Link
                    to={`/shop/category/${category.name}`}
                    className="navSubCategory nav__link nav__link--category"
                    key={category.id}
                    >
                    {category.name}
                  </Link>
                  );
                })}
              </div>
            </NavDropdown>
          </ul>
        </div>
        
      </div>
      
    </nav>
  );
};


export default Navbar;
