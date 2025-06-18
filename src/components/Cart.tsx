import React from "react";

function Cart({ cart, removeFromCart }) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>No products in cart.</p>
      ) : (
        <div>
          <ul style={{ listStyle: "none", padding: 0 }}>
            {cart.map((item) => (
              <li
                key={item.id}
                style={{ margin: "20px 0", borderBottom: "1px solid #eee" }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ width: 80, height: 80, objectFit: "contain" }}
                />
                <div>{item.title}</div>
                <div>${item.price}</div>
                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <h3>Total: ${total.toFixed(2)}</h3>
          <button className="buy-btn">Checkout</button>
        </div>
      )}
    </div>
  );
}

export default Cart;
