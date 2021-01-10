import React, { Component } from "react";

const ListItem = (props) => {
  const getListClasses = (index) => {
    const classes = "list-group-item";
    return props.current === index ? classes + " active" : classes;
  };

  return <li className={getListClasses(props.index)}>{props.chick.race}</li>;
};

export default ListItem;
