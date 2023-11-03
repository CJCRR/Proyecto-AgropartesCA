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
    <nav className="header__nav">
      <Link to="/" className="nav__link">
        INICIO
      </Link>
      <NavLink to="/shop" className="nav__link">
        TODOS
      </NavLink>
      <NavDropdown className="nav__link" title="CATEGORIAS" id="basic-nav-dropdown" onClick={handleOpen}>
        <div className="navCategory">
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

      <NavLink to="/Nosotros" className="nav__link">
        NOSOTROS
      </NavLink>
      <CartWidgets />
    </nav>
  );
};

export default Navbar;
