import React from "react";
import { useCartContext } from "../../context/CartState";
import { MdOutlineClose } from "react-icons/md";
import Item from "../Item/Item";

import Overlay from "../Overlay/Overlay";
import { Link } from "react-router-dom";

const Cart = () => {
  const { isOpen, closeCart, items } = useCartContext();

  let tax = 0;
  let total = 0;
  let subTotal = 0;
  const handleCalcSubTotal = (qty, price) => {
    let itemTotal = qty * price;
    let itemTax = itemTotal * 0.05;
    let itemSubTotal = qty * price + itemTax;
    subTotal += itemSubTotal;
    total += itemTotal;
    tax += itemTax;
  };
  const handleClose = () => {
    closeCart();
  };

  return (
    <Overlay show={isOpen}>
      <div className={isOpen ? "cart show" : "cart"}>
        <MdOutlineClose onClick={handleClose} className="cart__close" />
        {items.length === 0 ? (
          <div className="cart__empty">
            <h3 className="empty">Tu carrito esta vacio</h3>
            <Link to="/Productos" className="cart__go" onClick={handleClose}>
              Volver a la tienda
            </Link>
          </div>
        ) : (
          <div className="cart__content">
            <h3 className="cartMi">Mi Carrito</h3>
            <div className="cart__items">
              {items.map((product) => {
                handleCalcSubTotal(product.quantity, product.price);
                return (
                  <Item showAs="CartItem" product={product} key={product.id} />
                );
              })}
            </div>
            <hr className="divisor"/>
            
            <div className="flex-row cart__total">
              <h4>SubTotal</h4>
              <span>${total}</span>
            </div>
            <div className="flex-row cart__total">
              <h4>Impuesto</h4>
              <span>${tax}</span>
            </div>
            <div className="flex-row cart__total">
              <h4>Total</h4>
              <span>${subTotal}</span>
            </div>
            <Link to="/checkout" className="cart__cta" onClick={handleClose}>
              Revisar
            </Link>
          </div>
        )}
      </div>
    </Overlay>
  );
};

export default Cart;
