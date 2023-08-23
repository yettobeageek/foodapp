import CartContext from "../../../store/cart-context";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import { useContext } from "react";
const MealItem = (props) => {
  const price = `$${props.price?.toFixed(1)}`;
  const cartCtx = useContext(CartContext);

  const addItemToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      amount: amount,
      price: props.price,
      name: props.name,
    });
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addItemToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
