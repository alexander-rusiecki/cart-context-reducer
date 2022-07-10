import { useState } from 'react';
import { IProduct } from '../@types/product';
import { products } from '../db/products';
import Card from '../UI/Card/Card';
import Product from '../components/Product';

const ProductList = () => {
  const [productList] = useState<IProduct[]>(products);

  return (
    <div>
      {productList.map(product => {
        return (
          <Card key={product.id}>
            <Product {...product} />
          </Card>
        );
      })}
    </div>
  );
};

export default ProductList;
