import ProductList from '@/components/ProductList/ProductList';
import classes from './ProductsPage.module.css';

const ProductsPage = () => {
  return (
    <div className={classes['products-wrapper']}>
      <ProductList />
    </div>
  );
};

export default ProductsPage;
