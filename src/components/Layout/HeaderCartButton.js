import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";

import CartIcon from "../Cart/CartIcon";
import "./HeaderCartButton.module.css";
import classes from "./HeaderCartButton.module.css";

const HeaderCartButton = (props) => {
  const [btnAnimation, setBtnAnimation] = useState(false);
  const cartCtx = useContext(CartContext);
  const { items } = cartCtx;
  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const btnClasses = `${classes.button} ${btnAnimation ? classes.bump : ""}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnAnimation(true);

    const timer = setTimeout(() => {
      setBtnAnimation(false);
    }, 300);

    return()=>{
      clearTimeout(timer); 
    }
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
