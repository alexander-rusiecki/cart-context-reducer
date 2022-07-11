import { useState } from 'react';
import { IProduct } from '@/@types/product';
import { products } from '@/db/products';
import Card from '@/UI/Card/Card';
import SingleProduct from '@/components/SingleProduct/SingleProduct';

const ProductList = () => {
  const [productList] = useState<IProduct[]>(products);

  return (
    <>
      {productList.map(product => {
        return (
          <Card key={product.id}>
            <SingleProduct {...product} />
          </Card>
        );
      })}
    </>
  );
};

export default ProductList;
