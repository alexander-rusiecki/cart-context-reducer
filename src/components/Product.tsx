import { IProduct } from '../@types/product';

const Product = (props: IProduct) => {
  return (
    <div>
      <p>{props.name}</p>
      <img src={props.image} alt={props.name} />
      <p>{props.price}</p>
    </div>
  );
};

export default Product;
