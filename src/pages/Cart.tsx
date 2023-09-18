import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CartType, Product } from "../types/product";
import CartElement from "../components/CartElement";

const Cart: React.FC = () => {
  const state = useSelector((state: { cart: CartType }) => state);
  const dispatch = useDispatch();
  // считаем общую цену корзины
  const totalPrice = state.cart.items?.reduce((prev, next) => {
    return prev + next.price;
  }, 0);
  // функция удаления элемента из корзины
  const handleDeleteItem = (product: Product) => {
    dispatch({ type: "REMOVE_ITEM", payload: { product } });
  };

  return (
    <div className='page'>
      <h2>Корзина</h2>
      {state.cart.items ? (
        state.cart.items.map((i) => (
          <CartElement
            key={i.id}
            id={i.id}
            name={i.name}
            price={i.price}
            onClick={() => handleDeleteItem(i)}
          />
        ))
      ) : (
        <p>Корзина пуста</p>
      )}
      {totalPrice && <p>Общая стоимость: {totalPrice} ₽</p>}
    </div>
  );
};
export default Cart;
