import React from "react";
import { GoPlus, GoDash } from "react-icons/go";
import { useCartContext } from "../../context/CartState";

const ItemCounter = ({ showAs, productQty, productId }) => {
  const { updateCart } = useCartContext();

  const handleCartAdd = () => {
    updateCart(productId, productQty + 1);
  };

  const handleCartLess = () => {
    if (productQty > 1) {
      updateCart(productId, productQty - 1);
    }
  };

  const handleCheckoutCounterChange = (event) => {
    const value = parseInt(event.target.value);
    if (!isNaN(value) && value > 0) {
      updateCart(productId, value);
    }
  };

  if (showAs === "Cart") {
    return (
      
      <div className="ItemCounter ItemCounter--cart">
        <button
          className="counter__btn counter__btn--cart"
          onClick={handleCartLess}
          disabled={productQty === 1}
        >
          <GoDash />
        </button>
        <span className="counter__results counter__results--cart">
          {productQty}
        </span>
        <button
          className="counter__btn counter__btn--cart"
          onClick={handleCartAdd}
        >
          <GoPlus />
        </button>
      </div>
    );
  }

  if (showAs === "checkoutCounter") {
    return (
      <div className="quantity">
        <input
          type="number"
          className="quantity"
          step="0"
          value={productQty}
          onChange={handleCheckoutCounterChange}
          min="0"
        />
      </div>
    );
  }

  return null;
};

export default ItemCounter;
