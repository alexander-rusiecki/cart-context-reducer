import { createContext, useState } from 'react';
import { CartContextType, providerProps } from '../@types/cart';
import { IProduct } from '../@types/product';

export const CartContext = createContext<CartContextType | null>(null);

const CartProvider = ({ children }: providerProps) => {
  const [cart, setCart] = useState<IProduct[]>([]);

  const addToCart = (product: IProduct) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (id: number) => {
    setCart(cart.filter(p => p.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
