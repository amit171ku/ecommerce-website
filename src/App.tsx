import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Categories from "./components/Categories";
import Wishlist from "./components/Wishlist";
import Cart from "./components/Cart";
import Account from "./components/Account";
import "./components/style.css";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // Cart functions
  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // Wishlist functions
  const addToWishlist = (product) => {
    setWishlist((prev) => [...prev, product]);
  };
  const removeFromWishlist = (id) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
  };

  // Simple login (demo)
  const login = (username) => setUser({ username });
  const logout = () => setUser(null);

  return (
    <Router>
      <Navbar
        cartCount={cart.length}
        wishlistCount={wishlist.length}
        user={user}
        logout={logout}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              products={products}
              addToCart={addToCart}
              addToWishlist={addToWishlist}
            />
          }
        />
        <Route
          path="/categories"
          element={<Categories products={products} />}
        />
        <Route
          path="/wishlist"
          element={
            <Wishlist
              wishlist={wishlist}
              removeFromWishlist={removeFromWishlist}
              addToCart={addToCart}
            />
          }
        />
        <Route
          path="/cart"
          element={<Cart cart={cart} removeFromCart={removeFromCart} />}
        />
        <Route
          path="/account"
          element={<Account user={user} login={login} logout={logout} />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
