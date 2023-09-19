import { CartType, Product, ProductResponse } from "./../types/product";
import { AnyAction, configureStore } from "@reduxjs/toolkit";

// проверяем есть ли в локалсторадже корзина, если нет создаем пустую
const initialCart = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart")!)
  : { amount: 0, items: [] };

const addToCart = (state: CartType, action: AnyAction) => {
  return {
    amount: state.amount + 1,
    items: state.items
      ? [...state.items, action.payload.product]
      : [action.payload.product],
  };
};

const removeFromCart = (state: CartType, action: AnyAction) => {
  return {
    amount: state.amount - 1,
    items: state.items?.filter(
      (product) => product.id !== action.payload.product.id
    ),
  };
};

const productsReducer = (
  state: ProductResponse = { items: [] },
  action: AnyAction
) => {
  switch (action.type) {
    case "GET_PRODUCTS":
      return { items: action.payload.items };
    default:
      return state;
  }
};

const cartReducer = (state: CartType = initialCart, action: AnyAction) => {
  console.log(action.payload);
  switch (action.type) {
    case "ADD_ITEM":
      return addToCart(state, action);

    case "REMOVE_ITEM":
      return removeFromCart(state, action);
    default:
      return state;
  }
};

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
});
