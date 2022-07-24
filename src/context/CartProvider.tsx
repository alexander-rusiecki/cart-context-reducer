import { createContext, useState } from 'react';
import { CartContextType, providerProps } from '@/@types/cart';
import { IProduct } from '@/@types/product';

export const CartContext = createContext<CartContextType>({
  cart: [],
  productCount: 0,
  addToCart: (product: IProduct) => {},
  removeFromCart: (id: number) => {},
  clearCart: () => {},
});

const CartProvider = ({ children }: providerProps) => {
  const [cart, setCart] = useState<IProduct[]>([]);

  const addToCart = (product: IProduct) =>
    setCart(prevCart => [...prevCart, product]);

  const removeFromCart = (id: number) =>
    setCart(prevCart => prevCart.filter(p => p.id !== id));

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{
        cart,
        productCount: cart.length,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
