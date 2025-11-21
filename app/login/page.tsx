"use client";

import { useState } from "react";
import "../../ui/login.css";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (username === "tofiq" && password === "tofiq") {
      localStorage.setItem("loggedIn", "true");
      window.location.href = "/";
    } else {
      setError("İstifadəçi adı və ya şifrə səhvdir!");
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <h1 className="login-title">SpecialityAI Login</h1>

        <form onSubmit={handleLogin} className="login-form">
          <div className="form-group">
            <label>Kullanıcı adı</label>
            <input
              type="text"
              placeholder="tofiq"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Şifrə</label>
            <input
              type="password"
              placeholder="tofiq"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && <p style={{ color: "red" }}>{error}</p>}

          <button className="login-button" type="submit">
            Daxil ol
          </button>
        </form>
      </div>
    </div>
  );
}
