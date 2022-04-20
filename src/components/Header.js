import React from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const Header = ({itemsIncart}) => {
  return (
    <header>
      <ul className="navbar">
        <li className="navbar-item ">
          <Link to="home">home</Link>
        </li>
        <li className="navbar-item ">
          <Link to="about">about</Link>
        </li>
        <li className="navbar-item ">
          <Link to="menu">menu</Link>
        </li>

        <li className="basket ">
          <Link to="basket">
            <span className="cart-items">{itemsIncart}</span>
            <ShoppingCartOutlined />
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
