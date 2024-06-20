import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartState";
import ItemCounter from "../ItemCounter/ItemCounter";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import shopping_bag from "../../shopping-bag.svg";


const Item = ({ product, showAs }) => {
  const [itemCounter, setItemCounter] = useState(1);

  const { addItemToCart, openCart, deleteCartItem } = useCartContext();

  const deleteModal = withReactContent(Swal);

  const handleDelete = () => {
    deleteModal
      .fire({
        title: <strong>¿Estas segura?</strong>,
        showDenyButton: true,
        confirmButtonText: "Yes",
        denyButtonText: `Cancel`,
        icon: "warning",
      })
      .then((result) => {
        if (result.isConfirmed) {
          deleteCartItem(product.id);
        } else if (result.isDenied) {
          return;
        }
      });
  };

  const handleOnAdd = () => {
    addItemToCart(product, itemCounter);
    openCart();
  };

  if (showAs === "Detail") {
    return (
      <div className="detail__card col-12">
        <div className="card__image ">
          <img src={product.image} alt={product.title} className="image" />
        </div>
        <div className="card__body">
          <div className="card__header">
            <p className="card_detail_id">#{product.id} </p>
            <h3 className="card__title">{product.title}</h3>
            <span className="card__price">${product.price}</span>
            <hr className="hrCard"/>
            <p className="card__price">Stock:{product.stock}</p>
            <p className="card__price">Categoria: {product.category} </p>
            <p>{product.description}</p>
          </div>
          <button className="card__button" onClick={handleOnAdd}>Agregar</button>
        </div>
      </div>
    );
  }
  if (showAs === "CartItem") {
    return (
      <div className="cart__card  row">
        <div className="card_card_desc col">
          <p className="cart_card_id">#{product.id} </p>
          <p className="cart_card_title">{product.title}</p>
          <span className="price">{product.price}$</span>
          <ItemCounter showAs="Cart" productId={product.id} productQty={product.quantity} />
        </div>
        <div className="card_card_actions col">
          <svg className="delete" onClick={handleDelete}
            version="1.1" x="0px"
            y="0px" viewBox="0 0 60 60" enable-background="new 0 0 60 60" >
            <polygon
              points="38.936,23.561 36.814,21.439 30.562,27.691 24.311,21.439 22.189,23.561 28.441,29.812 22.189,36.064 24.311,38.186 30.562,31.934 36.814,38.186 38.936,36.064 32.684,29.812">
            </polygon>
          </svg>
        </div>
      </div>
    );
  }
  if (showAs === "checkout") {
    return (
      <ul class="products">
        <li class="rows">
          <div class="col left">
            <div class="thumbnail">
              <a href="#">
                <img src={product.image} alt={product.title} class="card-img-top" />
              </a>
            </div>
            <div class="detaill">
              <div class="name"><a href="#">{product.title}</a></div>
              <div class="description">{product.id}</div>
              <div class="price">{product.price}$</div>
            </div>
          </div>
          <div class="col right">
            <ItemCounter
              showAs="checkoutCounter"
              productId={product.id}
              productQty={product.quantity}
            />
            <div class="remove">
              <svg className="delete" onClick={handleDelete}
                version="1.1" x="0px"
                y="0px" viewBox="0 0 60 60" enable-background="new 0 0 60 60" >
                <polygon
                  points="38.936,23.561 36.814,21.439 30.562,27.691 24.311,21.439 22.189,23.561 28.441,29.812 22.189,36.064 24.311,38.186 30.562,31.934 36.814,38.186 38.936,36.064 32.684,29.812">
                </polygon>
              </svg>
            </div>

          </div>
        </li>
      </ul>
    );
  }
  return (
    <>

      <div className="card cardContenedor">
        <Link to={`/item/detail/${product.id}`} className="card">
          <img className="card-img-top" src={product.image} alt={product.title} />
          <div className="card-info">
            <p className="text-title-1">{product.title}</p>
          </div>
        </Link>
        <div className="card-footer">
          <span className="text-title precio">${product.price}</span>
          <p classNames="text-title precio">{product.category}</p>
          <button class="productoAgregar" onClick={handleOnAdd}> <img className="svg-icon" src={shopping_bag} /> </button>
        </div>
      </div>

    </>
  );
};

export default Item;
