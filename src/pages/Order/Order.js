import React from "react";
import { Link } from "react-router-dom";
import { IoReturnUpBack } from "react-icons/io5";
import { useCartContext } from "../../context/CartState";

const Order = ({ orderID }) => {
  const { emptyCart } = useCartContext();
  const handleReturn = () => {
    emptyCart();
  };
  return (
    <>
      <div className="order">
        <h2 className="order__congrats">
        ¡Felicidades! Gracias por confiar en nosotros
        </h2>
        <h3 className="order__id">
        Este es tu pedido: <span>{orderID}</span>
        </h3>
        <Link to="/" className="order__return" onClick={handleReturn}>
          Volver al inicio <IoReturnUpBack />
        </Link>
      </div>
    </>
  );
};

export default Order;
