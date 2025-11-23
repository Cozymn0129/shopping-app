import { mdiCart } from "@mdi/js";
import Icon from "@mdi/react";
import React from "react";
import { NavLink } from "react-router-dom";
import "../style.css";

function NavBar({ cartItems }) {
  // total amount in cart
  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="navbar">
      <div className="icon">
        <Icon path={mdiCart} size={1} /> Online Store
      </div>
      <div className="links">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/shop"
          className={({ isActive }) => (isActive ? "active" : "")}
        >
          Shop
        </NavLink>
        <NavLink
          to="/cart"
          className={({ isActive }) =>
            isActive ? "active cart-link" : "cart-link"
          }
        >
          <img
            className="cart-img"
            width="25"
            src="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2024%2024'%3e%3cpath%20d='M16,18C17.1,18%2018,18.9%2018,20C18,21.1%2017.1,22%2016,22C14.9,22%2014,21.1%2014,20C14,18.9%2014.9,18%2016,18M16,19C15.45,19%2015,19.45%2015,20C15,20.55%2015.45,21%2016,21C16.55,21%2017,20.55%2017,20C17,19.45%2016.55,19%2016,19M7,18C8.1,18%209,18.9%209,20C9,21.1%208.1,22%207,22C5.9,22%205,21.1%205,20C5,18.9%205.9,18%207,18M7,19C6.45,19%206,19.45%206,20C6,20.55%206.45,21%207,21C7.55,21%208,20.55%208,20C8,19.45%207.55,19%207,19M18,6H4.27L6.82,12H15C15.33,12%2015.62,11.84%2015.8,11.6L18.8,7.6V7.6C18.93,7.43%2019,7.22%2019,7C19,6.45%2018.55,6%2018,6M15,13H6.87L6.1,14.56L6,15C6,15.55%206.45,16%207,16H18V17H7C5.9,17%205,16.1%205,15C5,14.65%205.09,14.32%205.25,14.03L5.97,12.56L2.34,4H1V3H3L3.85,5H18C19.1,5%2020,5.9%2020,7C20,7.5%2019.83,7.92%2019.55,8.26L16.64,12.15C16.28,12.66%2015.68,13%2015,13Z'%20/%3e%3c/svg%3e"
          />
          <button className="cart-button">{totalItems}</button>
        </NavLink>
      </div>
    </nav>
  );
}

export default NavBar;
