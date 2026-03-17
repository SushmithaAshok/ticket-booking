import React, { useState } from "react";
import "./Auth.css";
import bg from "../assets/bg.jpg";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      name: name || "User",
      email: "test@gmail.com"
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert(isSignup ? "Signup Successful" : "Login Successful");
    navigate("/home");
  };

  return (
    <div className="auth-container">

      <div className="left" style={{ backgroundImage: `url(${bg})` }}>
        <div className="overlay">
          <h1>NS Booking 🎟️</h1>
          <p>Your Movie Experience Starts Here</p>
        </div>
      </div>

      <div className="right">
        <h2>{isSignup ? "Sign Up" : "Login"}</h2>

        <form onSubmit={handleSubmit}>
          {isSignup && (
            <input
              type="text"
              placeholder="Name"
              required
              onChange={(e) => setName(e.target.value)}
            />
          )}
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />

          <button type="submit">
            {isSignup ? "Sign Up" : "Login"}
          </button>
        </form>

        <p onClick={() => setIsSignup(!isSignup)} className="toggle">
          {isSignup
            ? "Already have an account? Login"
            : "Don't have an account? Sign Up"}
        </p>
      </div>

    </div>
  );
};

export default Login;