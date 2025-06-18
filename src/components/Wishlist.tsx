import React from "react";
import Item from "./Item";

function Wishlist({ wishlist, removeFromWishlist, addToCart }) {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h2>Your Wishlist</h2>
      {wishlist.length === 0 ? (
        <p>No products in wishlist.</p>
      ) : (
        <div className="product-list">
          {wishlist.map((product) => (
            <div key={product.id} style={{ position: "relative" }}>
              <Item
                product={product}
                addToCart={addToCart}
                addToWishlist={() => {}}
              />
              <button
                className="remove-btn"
                style={{ position: "absolute", top: 10, right: 10 }}
                onClick={() => removeFromWishlist(product.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;
