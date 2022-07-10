import { cardProps } from '../../@types/card';
import classes from './Card.module.css';

const Card = (props: cardProps) => {
  return <div className={classes.card}>{props.children}</div>;
};

export default Card;
