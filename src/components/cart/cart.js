import React, { useState, useEffect } from "react";
import classes from "./cart.module.css";

import CartItem from "./cartItem/cartItem";

import { connect } from "react-redux";

const Cart = ({ cart }) => {
  // { cart }
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [cart]);

  return (
    <div className={classes.Cart}>
      <div className={classes.Cart__items}>
        {cart.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>

      <div className={classes.Cart__summary}>
        <h4 className={classes.summary__title}>Cart Summary</h4>
        <div className={classes.summary__price}>
          <span>Total items: {totalItems} items</span>
          <br />
          <span>Total Price: ₹ {totalPrice}</span>
        </div>
        <button className={classes.summary__checkoutBtn}>
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Cart);
