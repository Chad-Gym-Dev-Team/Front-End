import React, { useContext, useState } from "react";
import { ShopContext } from "../../context/shop-context";
import "./shop.css";
export const Product = (props) => {
  const { id, productName, price, productImage, description } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);
  const [isProductOpen, setProfileOpen] = useState(false);

  const cartItemCount = cartItems[id];
  const handleProductToggle = () => {
    setProfileOpen((prevOpen) => !prevOpen);
  };
  return (
    <div>
      {isProductOpen && (
        <div>
          <div
            className="leftbgProductDetail"
            onClick={handleProductToggle}
          ></div>
          <div className="productDetail">
            <button id="close" onClick={handleProductToggle}></button>
            <img src={productImage} className="imgProductDetail" />
            <div className="fullDescription">
              <p>
                <b>{productName}</b>
              </p>
              <p>
                <b>{description}</b>
              </p>
              <p> Price: ${price}</p>
            </div>
          </div>
        </div>
      )}
      <div className="product">
        <img src={productImage} onClick={handleProductToggle} />
        <div className="description">
          <p>
            <b>{productName}</b>
          </p>
          <p> ${price}</p>
        </div>
        <button className="addToCartBttn" onClick={() => addToCart(id)}>
          Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
        </button>
      </div>
    </div>
  );
};
