import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContextType } from '@/@types/cart';
import { CartContext } from '@/context/CartProvider';
import classes from './Navbar.module.css';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  const { cart } = useContext(CartContext) as CartContextType;
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <ul className={classes.flex}>
          <div className={classes.next}>
            <li className={classes.lists}>
              <Link className={classes.links} to="/">
                Home
              </Link>
            </li>
            <li className={classes.lists}>
              <Link className={classes.links} to="/products">
                Products
              </Link>
            </li>
          </div>
          <div className={classes.next}>
            <li className={classes.lists}>
              <FaShoppingCart />
            </li>
            <li className={classes.lists}>
              <p>{cart.length}</p>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
