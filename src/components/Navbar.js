import React, { useState, useEffect } from "react";
import "./Home.css";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [city, setCity] = useState("Coimbatore");

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) setUser(storedUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.href = "/";
  };

  return (
    <>
      <div className="navbar">
        <div className="logo">NS <span>Booking</span></div>

        <input
          type="text"
          placeholder="Search for Movies, Events..."
          className="search"
        />

        <div className="nav-right">

          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="city-dropdown"
          >
            <option>Coimbatore</option>
            <option>Chennai</option>
            <option>Bangalore</option>
            <option>Hyderabad</option>
          </select>

          {user ? (
            <>
              <span className="username">Hi, {user.name}</span>
              <button onClick={handleLogout} className="signin-btn">
                Logout
              </button>
            </>
          ) : (
            <button className="signin-btn">Sign In</button>
          )}
        </div>
      </div>

      <div className="sub-navbar">
        <div className="left-menu">
          <span>Movies</span>
          <span>Stream</span>
          <span>Events</span>
          <span>Plays</span>
          <span>Sports</span>
          <span>Activities</span>
        </div>

        <div className="right-menu">
          <span>ListYourShow</span>
          <span>Corporates</span>
          <span>Offers</span>
          <span>Gift Cards</span>
        </div>
      </div>
    </>
  );
};

export default Navbar;