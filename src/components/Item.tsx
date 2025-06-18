import React from "react";
import "./style.css";

function Item({ product, addToCart, addToWishlist }) {
  return (
    <div className="item">
      <img src={product.image} alt={product.title} className="product-img" />
      <h2>{product.title}</h2>
      <p className="desc">{product.description}</p>
      <div className="item-footer">
        <span className="price">${product.price}</span>
        <button className="buy-btn" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
        <button className="wishlist-btn" onClick={() => addToWishlist(product)}>
          ♡
        </button>
      </div>
    </div>
  );
}

export default Item;
