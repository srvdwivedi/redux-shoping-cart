import Card from '../UI/Card';
import { useSelector } from 'react-redux';
import classes from './Cart.module.css';
import CartItem from './CartItem';


const Cart = (props) => {
  const cart = useSelector(state => state.cart.items)
  console.log(cart)
  return (
    <Card className={classes.cart}>
      <h2> Shopping Cart</h2>
      <ul>
        {cart.map((item) => (
          <CartItem key={item.id}
            item={{ title: item.name, quantity: item.quantity, total: item.totalPrice, price: item.price, id : item.id }}
          />
        ))
        }
      </ul>
    </Card>
  );
};

export default Cart;
