import React from "react";
import PropTypes from "prop-types";
import "../UI/headerStyle.css";

const ProductsList = ({ title, children }) => (
  <div className="p-3 mb-2 bg-warning text-dark">
    <h3>{title}</h3>
    <div>{children}</div>
  </div>
);

ProductsList.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string.isRequired
};

export default ProductsList;
