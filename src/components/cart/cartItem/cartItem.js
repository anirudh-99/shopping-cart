import React, { useState } from "react";
import classes from "./cartItem.module.css";

import TrashIcon from "../../../assets/trashIcon.svg";

import { connect } from "react-redux";
import { removeFromCart, adjustItemQty } from "../../../store/shop/shopActions";

const CartItem = ({ item, removeFromCart, adjustQty }) => {
  const [input, setInput] = useState(item.qty);

  const onChangeHandler = (e) => {
    setInput(e.target.value);
    adjustQty(item.id, parseInt(e.target.value || 0, 10));
  };

  return (
    <div className={classes.CartItem}>
      <img
        className={classes.CartItem__image}
        src={item.image}
        alt={item.title}
      />

      <div className={classes.CartItem__details}>
        <p className={classes.Details__title}>{item.title} </p>
        <p className={classes.Details__description}>{item.description}</p>
        <p className={classes.Details__price}>₹ {item.price}</p>
      </div>

      <div className={classes.CartItem__actions}>
        <div className={classes.CartItem__qty}>
          <label>Qty:</label>
          <input
            type="number"
            value={input}
            min="1"
            onChange={onChangeHandler}
          />
        </div>
        <button
          className={classes.DeleteBtn}
          onClick={() => removeFromCart(item.id)}
        >
          <img src={TrashIcon} className={classes.TrashIcon} alt="delete" />
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    adjustQty: (id, qty) => dispatch(adjustItemQty(id, qty)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
