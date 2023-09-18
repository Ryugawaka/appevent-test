import { CartType, ProductResponse } from "./../types/product";
import { AnyAction, configureStore } from "@reduxjs/toolkit";

const initialCart = {
  amount: 0,
  items: undefined,
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
        items: state.items?.filter((item) => item !== action.payload.product),
      };
    default:
      return initialCart;
  }
};

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
});
