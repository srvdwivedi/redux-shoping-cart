import classes from './CartButton.module.css';
import {useDispatch, useSelector } from 'react-redux';

import { shopActions } from '../../store/shop-slice';


const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartToggleHandler = () => {
    dispatch(shopActions.toggle());
  }
  const cartFrequency = useSelector(state => state.cart.totalQuantity)
  return (
    <button className={classes.button} onClick={cartToggleHandler}>
      <span> Cart</span>
      <span className={classes.badge}>{cartFrequency}</span>
    </button>
  );
};

export default CartButton;
