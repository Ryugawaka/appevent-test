import React from "react";

type CartElementProps = {
  name: string;
  price: number;
  id: number;
  onClick: () => void;
};

const CartElement: React.FC<CartElementProps> = (props) => {
  const { name, price, id, onClick } = props;
  return (
    <div className='cart-element'>
      <p>{name}</p>
      <p>{price}₽</p>
      <button className='cart-element__delete-button' onClick={onClick}>
        Удалить
      </button>
    </div>
  );
};

export default CartElement;
