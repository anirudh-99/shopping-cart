import React from "react";
import classes from "./productItem.module.css";

import { connect } from "react-redux";
import { addToCart } from "../../../store/shop/shopActions";

const ProductItem = ({ product, addToCart }) => {
  return (
    <div className={classes.ProductItem}>
      <img
        src={product.image}
        alt={product.title}
        className={classes.Product__img}
      ></img>

      <div className={classes.Product__details}>
        <p className={classes.Details__title}>{product.title}</p>
        <p className={classes.Details__price}>₹ {product.price}</p>
      </div>

      <button
        onClick={() => addToCart(product.id)}
        className={classes.Btn__addToCart}
      >
        Add To Cart
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(ProductItem);
