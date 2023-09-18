import React from "react";
import { CartType } from "../types/product";
import { useDispatch, useSelector } from "react-redux";

type ProductCardProps = {
  image: string;
  price: number;
  name: string;
  id: number;
  onClick: (id: number) => void;
};

const ProductCard: React.FC<ProductCardProps> = (props) => {
  const { image, price, name, id, onClick } = props;
  return (
    <div className='product'>
      <img src={image} alt='product' className='product-image' />
      <div className='product-info'>
        <p>{name}</p>
        <p>Цена: {price} ₽</p>
      </div>
      <button className='product-cart-button' onClick={() => onClick(id)}>
        Добавить в корзину
      </button>
    </div>
  );
};

export default ProductCard;
