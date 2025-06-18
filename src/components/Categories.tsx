import React from "react";

function Categories({ products }) {
  const categories = [...new Set(products.map((p) => p.category))];
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h2>Categories</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {categories.map((cat) => (
          <li key={cat} style={{ margin: "10px 0", fontSize: "1.2em" }}>
            {cat}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
