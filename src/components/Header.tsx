import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CartType } from "../types/product";
import "./Header.css";

const Header: React.FC = () => {
  const cart = useSelector((state: { cart: CartType }) => state);
  return (
    <div className='header'>
      <Link to={"/"}>
        <button className='header__item'>Каталог</button>
      </Link>
      <Link to={"/cart"}>
        <div style={{ position: "relative" }}>
          <button className='header__item'>Корзина</button>
          <p className='cart-amount'>{cart.cart.amount}</p>
        </div>
      </Link>
    </div>
  );
};
export default Header;
