import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { useSelector, useDispatch } from 'react-redux';
import store from '../../store';

import { cartActions } from '../../store/cart-slice';


const ProductItem = (props) => {
  const { title, price, description } = props;
  const dispatch = useDispatch();
  const toggle = useSelector( state => state.isCartVisible)

  const addToCardHandler = () => {
    dispatch(cartActions.toggle())
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCardHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
