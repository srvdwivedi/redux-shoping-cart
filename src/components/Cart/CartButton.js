import classes from './CartButton.module.css';
import {useDispatch} from 'react-redux';

import { shopActions } from '../../store/shop-slice';


const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartToggleHandler = () => {
    dispatch(shopActions.toggle());
  }
  return (
    <button className={classes.button} onClick={cartToggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button>
  );
};

export default CartButton;
