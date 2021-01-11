// src/components/listItem.js
import React from "react";

const ListItem = (props) => {
  const getListClasses = (index) => {
    const classes = "list-group-item";
    return props.current === index ? classes + " active" : classes;
  };

  return (
    <li className={getListClasses(props.index)}>
      <button
        className="mr-3 btn btn-sm btn-danger"
        onClick={props.handleDelete}
      >
        X
      </button>
      <span>{props.chick.race}</span>
    </li>
  );
};

export default ListItem;
