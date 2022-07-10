import { IProduct } from './product';

export type CartContextType = {
  cart: IProduct[];
  addProduct: (product: IProduct) => void;
  removeProduct: (id: number) => void;
  clearCart: () => void;
};
