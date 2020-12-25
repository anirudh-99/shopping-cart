import React, { useState, useEffect } from "react";
import classes from "./navbar.module.css";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

import cartIcon from "../../assets/cartIcon.svg";

const Navbar = ({ cart }) => {
  const [cartCount, setCartCount] = useState(0);

  //load the no. of items in the cart
  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart]);

  return (
    <div className={classes.Navbar}>
      <Link to="/">
        <h2 className={classes.Navbar__title}>ShopNow</h2>
      </Link>
      <Link to="/cart">
        <div className={classes.Navbar__cart}>
          <img src={cartIcon} className={classes.cartIcon} alt="cart" />
          <div className={classes.cart__counter}>{cartCount}</div>
        </div>
      </Link>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Navbar);
