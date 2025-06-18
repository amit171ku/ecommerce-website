import React from "react";
import Item from "./Item";

function Home({ products, addToCart, addToWishlist }) {
  return (
    <div>
      <h1 className="main-title">Welcome to ShopNest!</h1>
      <div className="product-list">
        {products.map((product) => (
          <Item
            key={product.id}
            product={product}
            addToCart={addToCart}
            addToWishlist={addToWishlist}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
