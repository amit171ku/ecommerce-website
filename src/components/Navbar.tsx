import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar({ cartCount, wishlistCount, user, logout }) {
  return (
    <nav className="navbar">
      <div className="brand">ShopNest</div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/categories">Categories</Link>
        </li>
        <li>
          <Link to="/wishlist">
            Wishlist{" "}
            {wishlistCount > 0 && (
              <span className="badge">{wishlistCount}</span>
            )}
          </Link>
        </li>
        <li>
          <Link to="/cart">
            Cart {cartCount > 0 && <span className="badge">{cartCount}</span>}
          </Link>
        </li>
        <li>
          <Link to="/account">{user ? user.username : "Account"}</Link>
          {user && (
            <button className="logout-btn" onClick={logout}>
              Logout
            </button>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
