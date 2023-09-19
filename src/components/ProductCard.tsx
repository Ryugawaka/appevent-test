import React from "react";

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
      <img src={image} alt='product' className='product__image' />
      <div className='product__info'>
        <p>{name}</p>
        <p>Цена: {price} ₽</p>
      </div>
      <button className='product__cart-button' onClick={() => onClick(id)}>
        Добавить в корзину
      </button>
    </div>
  );
};

export default ProductCard;
