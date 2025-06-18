import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer className="footer">
      <div>© {new Date().getFullYear()} ShopNest. All rights reserved.</div>
      <div>
        <a href="#">Privacy Policy</a> | <a href="#">Returns</a> |{" "}
        <a href="#">Contact</a>
      </div>
    </footer>
  );
}

export default Footer;
