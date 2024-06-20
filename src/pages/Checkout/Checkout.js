import React, { useState } from "react";
import { useCartContext } from "../../context/CartState";
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";
import Item from "../../components/Item/Item";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Order from "../Order/Order";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer";
import { ChevronRight } from 'react-bootstrap-icons';


const Checkout = () => {
  const { items } = useCartContext();
  const navigate = useNavigate();
  const navigateModal = withReactContent(Swal);
  const [orderId, setOrderId] = useState("");

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

  if (items.length === 0) {
    navigateModal
      .fire({
        title: <strong>Lo sentimos, no hay productos</strong>,
        html: <h5>De vuelta a la tienda</h5>,
        confirmButtonText: "Ok",
        icon: "warning",
      })
      .then((result) => {
        if (result.isConfirmed) {
          navigate("/");
        }
      });
  } else if (orderId) {
    return <Order orderID={orderId} />;
  } else {
    return (
      <>
        <Header />
        <header class="container">
          <h1>Shopping Cart</h1>
          <ul class="breadcrumb">
            <a ><li><Link to="/" className="nav__link nav-link">Inicio</Link></li></a>
            <ChevronRight  />
            <a href="#" disabled><li>Cart</li></a>
            <ChevronRight  />
            <a href="#" disabled><li>Checkout</li></a>
          </ul>
          <span class="count">{items.length} artículos en la bolsa</span>
        </header>
        <section class="container">
          <div>
            
              {items.map((product) => {
                handleCalcSubTotal(product.quantity, product.price);
                return (
                  <Item showAs="checkout" product={product} key={product.id} />
                );
              })}

          </div>
        </section>
        <section class="container purcha" v-if="products.length > 0">
          <div class="promotion">
            <h2 for="promo-code">Complete con su informacion</h2>
            <CheckoutForm id={orderId} setId={setOrderId} />
          </div>
          <div class="summary">
          <h2 for="promo-code">Monto a Pagar</h2>
            <ul>
              <li class="total">Subtotal <span class="Subtotal cart__total">{total}$</span></li>
              <li>Impuesto <span class="tax cart__total">{tax}$</span></li>
              <li class="total">Total <span class="total cart__total">{subTotal}$</span></li>
            </ul>
          </div>
        </section>
        <Footer />
      </>
    );
  }
};

export default Checkout;
