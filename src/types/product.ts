export type Product = {
  id: number;
  image: string;
  name: string;
  price: number;
};

export type ProductResponse = {
  items: Product[];
};

export type CartType = {
  amount: number;
  items?: Product[];
};
