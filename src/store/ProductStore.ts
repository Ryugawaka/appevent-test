import { CartType, Product, ProductResponse } from "./../types/product";
import { AnyAction, configureStore } from "@reduxjs/toolkit";

// проверяем есть ли в локалсторадже корзина, если нет создаем пустую
const initialCart = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart")!)
  : { amount: 0, items: [] };

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

const removeItemFromArr = (arr: Product[], index: number) => {
  const newArr = arr.slice();
  newArr.splice(index, 1);
  return newArr;
};

const cartReducer = (state: CartType = initialCart, action: AnyAction) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        amount: state.amount + 1,
        items: state.items
          ? [...state.items, action.payload.product]
          : [action.payload.product],
      };

    case "REMOVE_ITEM":
      return {
        amount: state.amount - 1,
        items: removeItemFromArr(state.items!, action.payload.index),
      };
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
