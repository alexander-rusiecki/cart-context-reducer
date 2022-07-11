import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContextType } from '@/@types/cart';
import { CartContext } from '@/context/CartProvider';

const Navbar = () => {
  const { cart } = useContext(CartContext) as CartContextType;
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
        <p>{cart.length}</p>
      </nav>
    </header>
  );
};

export default Navbar;
