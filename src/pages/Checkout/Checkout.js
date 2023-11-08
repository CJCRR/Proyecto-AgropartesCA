import React, { useState } from "react";
import { useCartContext } from "../../context/CartState";
import CheckoutForm from "../../components/CheckoutForm/CheckoutForm";
import Item from "../../components/Item/Item";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Order from "../Order/Order";
import Footer from "../../components/Footer/Footer";


const Checkout = () => {
  const { items } = useCartContext();
  const navigate = useNavigate();
  const navigateModal = withReactContent(Swal);
  const [orderId, setOrderId] = useState("");

  let subTotal = 0;

  const handleCalcSubTotal = (qty, price) => {
    let itemSubTotal = qty * price;
    subTotal += itemSubTotal;
  };

  const mainLogo =
    "https://res.cloudinary.com/dtpfo51rx/image/upload/v1669562382/swoosh/logos/logo_oqhbhu.png";

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
          navigate("/shop");
        }
      });
  } else if (orderId) {
    return <Order orderID={orderId} />;
  } else {
    return (
      <>
    <div className="container">
      <div className="purchase__container row">
        <div className="checkout col order-1 order-md-2">
          <div className="contact">
            <div className="contact__information">
              <h1 className="contact__title">Complete con su informacion</h1>
              <CheckoutForm id={orderId} setId={setOrderId} />
            </div>
          </div>
        </div>
        <div className="summary col order-lg-2">
          <h1 className="summary__title">Resumen de compra</h1>
          
          <div className="summary__items">
            {items.map((product) => {
              handleCalcSubTotal(product.quantity, product.price);
              return (
                <Item showAs="CartItem" product={product} key={product.id} />
              );
            })}
          </div>
          <hr className="divisor" />
          
          <div className="flex-row cart__total">
            <h4>Total</h4>
            <span>${subTotal}</span>
          </div>
        </div>
      </div>
    </div>
      <Footer />
      </>
    );
  }
};

export default Checkout;
