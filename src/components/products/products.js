import React from "react";
import classes from "./products.module.css";

import ProductItem from "./productItem/productItem";
import { connect } from "react-redux";

const Products = ({productsData}) => {
  return (
    <div className={classes.Products}>
      {productsData.map((product) => (
        <ProductItem key={product.id} product={product}></ProductItem>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    productsData: state.shop.products,
  };
};

export default connect(mapStateToProps)(Products);
