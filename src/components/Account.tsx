import React, { useState } from "react";

function Account({ user, login, logout }) {
  const [username, setUsername] = useState("");

  if (user) {
    return (
      <div style={{ padding: "40px", textAlign: "center" }}>
        <h2>Welcome, {user.username}!</h2>
        <button className="buy-btn" onClick={logout}>
          Logout
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Enter username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ padding: "8px", fontSize: "1em" }}
      />
      <button
        className="buy-btn"
        style={{ marginLeft: "10px" }}
        onClick={() => username && login(username)}
      >
        Login
      </button>
    </div>
  );
}

export default Account;
