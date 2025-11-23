import "../style.css";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <div className="home-page">
      <div className="upper-container">
        <h1 className="title">Welcome to our Online Store</h1>
        <p>Discover our amazing products with the best quality and prices.</p>
        <button className="shop-button" onClick={() => navigate("/shop")}>
          Shop now
        </button>
      </div>

      <div className="features">
        <div className="first-feature">
          <h2>Quality Products</h2>
          <p>
            All our products are carefully selected and inspected to ensure the
            highest quality.
          </p>
        </div>
        <div className="second-feature">
          <h2>Fast Shipping</h2>
          <p>
            We deliver your orders as quickly and safely as possible to your
            doorstep.
          </p>
        </div>
        <div className="third-feature">
          <h2>24/7 support</h2>
          <p>
            Our deliberate customer support team is always ready to assist you.
          </p>
        </div>
      </div>
    </div>
  );
}
