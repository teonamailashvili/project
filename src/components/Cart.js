import React from "react";
import PropTypes from "prop-types";
import Product from "./Product";
import "../UI/headerStyle.css";

const Cart = ({ products, total, onCheckoutClicked }) => {
  const hasProducts = products.length > 0;
  const nodes = hasProducts ? (
    products.map((product) => (
      <Product
        title={product.title}
        price={product.price}
        quantity={product.quantity}
        key={product.id}
      />
    ))
  ) : (
    <em>add some products to cart.</em>
  );

  return (
    <div className="p-3 mb-2 bg-info text-white">
      <h3>Your Cart</h3>
      <div>{nodes}</div>
      <p>Total price: ${total}</p>
      <button
        onClick={onCheckoutClicked}
        disabled={hasProducts ? "" : "disabled"}
        className="btn btn-danger"
      >
        Order
      </button>
    </div>
  );
};

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
};

export default Cart;
