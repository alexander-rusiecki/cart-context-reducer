import { useContext } from 'react';
import { CartContextType } from '@/@types/cart';
import { IProduct } from '@/@types/product';
import { CartContext } from '@/context/CartProvider';

const SingleProduct = (props: IProduct) => {
  const { name, price, image } = props;
  const { addToCart, removeFromCart } = useContext(
    CartContext
  ) as CartContextType;

  return (
    <div>
      <p>{name}</p>
      <img src={image} alt={props.name} />
      <p>${price}</p>
      <button onClick={() => addToCart(props)}>add to cart</button>
      <button onClick={() => removeFromCart(props.id)}>remove from cart</button>
    </div>
  );
};

export default SingleProduct;
