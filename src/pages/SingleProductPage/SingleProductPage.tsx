import { IProduct } from '@/@types/product';
import SingleProduct from '@/components/SingleProduct/SingleProduct';

const SingleProductPage = (props: IProduct) => {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
  );
};

export default SingleProductPage;
