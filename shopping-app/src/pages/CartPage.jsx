import { useNavigate } from "react-router-dom";
import emptyCartIcon from "../assets/shopping-cart_18851977.png";
import "../style.css";
import React from "react";

export default function CartPage({
  cartItems,
  updateQuantity,
  removeFromCart,
}) {
  const navigate = useNavigate();
  // total amount in cart
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const demoAlert = () => {
    alert("This is a demo app. Checkout is not developed yet!");
  };

  if (cartItems.length === 0) {
    return (
      <div className="empty-container">
        <h1>Your Cart</h1>
        <div className="empty-cart">
          <img
            src={emptyCartIcon}
            alt="empty cart icon"
            width={120}
            height={120}
          />
          <p>Your cart is empty</p>
          <button onClick={() => navigate("/shop")}>Continue Shopping</button>
        </div>
      </div>
    );
  }

  const total = cartItems.reduce(
    (sum, cartItem) => sum + cartItem.price * cartItem.quantity,
    0,
  );

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      <div className="cart-container">
        <p className="cart-items-text">Cart Items ({totalItems})</p>

        {cartItems.map((item) => {
          return (
            <div className="cart-items" key={item.id}>
              <img src={item.image} alt={item.title} width={80} height={80} />
              <div className="item-info">
                <h3>{item.title}</h3>
                <p>Price: ${item.price}</p>
              </div>
              <div className="item-quantity">
                <div className="quantity-buttons">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    disabled={item.quantity === 1}
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  >
                    +
                  </button>
                </div>
                <button
                  className="remove-button"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <h2>Total: ${total.toFixed(2)}</h2>
      <div className="lower-content">
        <button className="checkout-button" onClick={demoAlert}>
          Proceed to checkout
        </button>
        <p className="continue-link" onClick={() => navigate("/shop")}>
          Continue Shopping
        </p>
      </div>
    </div>
  );
}
