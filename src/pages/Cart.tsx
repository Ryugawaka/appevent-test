import React from "react";
import { useSelector } from "react-redux";
import { CartType } from "../types/product";
import CartElement from "../components/CartElement";

const Cart: React.FC = () => {
  const state = useSelector((state: { cart: CartType }) => state);

  //   const totalPrice: number = state.cart.items?.reduce((sum, elem): number => {
  //     return sum.price + elem.price;
  //   });
  return (
    <div className='page'>
      {state.cart.items ? (
        state.cart.items.map((i) => (
          <CartElement id={i.id} name={i.name} price={i.price} />
        ))
      ) : (
        <p>Корзина пуста</p>
      )}
    </div>
  );
};
export default Cart;
