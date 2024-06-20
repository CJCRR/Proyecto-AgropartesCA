import { useContext, createContext, useState, useEffect } from "react";
import React from "react";

const initialState = {
  items: [],
  isOpen: false,
  addItemToCart: () => {},
  getNumberOfItems: () => {},
  openCart: () => {},
  closeCart: () => {},
  updateCart: () => {},
  deleteCartItem: () => {},
  emptyCart: () => {},
};
const CartContext = createContext(initialState);

const CartState = ({ children }) => {
  const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  const [items, setItems] = useState(storedCartItems);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(items));
  }, [items]);

  const handleOpenCart = () => {
    setIsOpen(true);
  };
  const handleCloseCart = () => {
    setIsOpen(false);
  };
  const handleAddItemToCart = (item, quantity) => {
    const existingItem = items.find((i) => i.id === item.id);

    if (existingItem) {
      const updatedItems = items.map((i) =>
        i.id === item.id ? { ...i, quantity: i.quantity + quantity } : i
      );
      setItems(updatedItems);
    } else {
      setItems([...items, { ...item, quantity }]);
    }
  };
  const handleNumberOfItems = () => {
    return items.reduce((total, item) => total + item.quantity, 0);
  };
  const handleDeleteCartItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };
  const handleUpdateCartItemQty = (id, quantity) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, quantity } : item
    );
    setItems(updatedItems);
  };
  const handleEmptyCart = () => {
    setItems([]);
  };
  return (
    <CartContext.Provider
      value={{
        items,
        isOpen,
        addItemToCart: handleAddItemToCart,
        getNumberOfItems: handleNumberOfItems,
        openCart: handleOpenCart,
        closeCart: handleCloseCart,
        updateCart: handleUpdateCartItemQty,
        deleteCartItem: handleDeleteCartItem,
        emptyCart: handleEmptyCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartState;

export const useCartContext = () => {
  return useContext(CartContext);
};
