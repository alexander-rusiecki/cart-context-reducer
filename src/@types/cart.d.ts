import { IProduct } from './product';

export type CartContextType = {
  cart: IProduct[];
  productCount: number;
  addToCart: (product: IProduct) => void;
  removeFromCart: (id: number) => void;
  clearCart: () => void;
};

export type providerProps = {
  children: JSX.Element;
};
