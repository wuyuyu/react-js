// src/components/listItem.js
import React from "react";

const ListItem = (props) => {
  const getListClasses = (index) => {
    const classes = "list-group-item";
    return props.current === index ? classes + " active" : classes;
  };

  return (
    <li className={getListClasses(props.index)}>
      <span><b>{props.product.productName}</b></span>
      <span>({props.product.productCategory})</span>
    </li>
  );
};

export default ListItem;
