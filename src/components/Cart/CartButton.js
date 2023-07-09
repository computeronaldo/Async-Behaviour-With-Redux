import { useDispatch, useSelector } from "react-redux";
import classes from "./CartButton.module.css";
import { cartActions } from "../../store/cart";

const CartButton = (props) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const totalItems = cartItems.reduce((acc, cur) => {
    return acc + cur.quantity;
  }, 0);

  const toggleCartHandler = (e) => {
    dispatch(cartActions.toggleCart());
  };

  return (
    <button onClick={toggleCartHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalItems}</span>
    </button>
  );
};

export default CartButton;
