import React from "react";
import "./CartElement.css";

type CartElementProps = {
  name: string;
  price: number;
  id: number;
};

const CartElement: React.FC<CartElementProps> = (props) => {
  const { name, price, id } = props;
  return (
    <div className='cart-element'>
      <p>{name}</p>
      <p>{price} ₽</p>
    </div>
  );
};

export default CartElement;
