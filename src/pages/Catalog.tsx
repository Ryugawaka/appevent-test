import React, { useEffect } from "react";
import { CartType, Product, ProductResponse } from "../types/product";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";

const url = "https://appevent.ru/dev/task1/catalog";

const Catalog: React.FC = () => {
  const state = useSelector((state: { products: ProductResponse }) => state);
  const dispatch = useDispatch();

  const addToCart = (product: Product) => {
    dispatch({
      type: "ADD_ITEM",
      payload: { product },
    });
  };

  async function getProducts(): Promise<ProductResponse> {
    const response = await fetch(url);
    const products = await response.json();
    return products;
  }

  const getData = async () => {
    dispatch({ type: "GET_PRODUCTS", payload: await getProducts() });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className='catalog page'>
      {state.products.items.length > 0 &&
        state.products.items.map((i) => (
          <ProductCard
            key={i.id}
            name={i.name}
            image={i.image}
            id={i.id}
            price={i.price}
            onClick={() => addToCart(i)}
          />
        ))}
    </div>
  );
};
export default Catalog;
