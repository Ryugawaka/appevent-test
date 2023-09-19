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
  const handleDeleteItem = (index: number) => {
    dispatch({ type: "REMOVE_ITEM", payload: { index } });
  };

  return (
    <div className='page'>
      <h2>Корзина</h2>
      {state.cart.items?.length! > 0 ? (
        state.cart.items!.map((i, index) => (
          <CartElement
            key={index}
            id={i.id}
            name={i.name}
            price={i.price}
            onClick={() => handleDeleteItem(index)}
          />
        ))
      ) : (
        <p>Корзина пуста</p>
      )}
      {totalPrice! > 0 && <p>Общая стоимость: {totalPrice} ₽</p>}
    </div>
  );
};
export default Cart;
