import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <Card className={classes.cart}>
      <h2>
        Your Shopping Cart{" "}
        {cartItems.length === 0 || !cartItems ? "Is Empty" : ""}
      </h2>
      <ul>
        {cartItems.map((item) => {
          return <CartItem key={item.id} item={item} />;
        })}
      </ul>
    </Card>
  );
};

export default Cart;
