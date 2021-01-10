import React, { Component } from "react";
import ListItem from "./listItem.jsx";

const List = (props) => {
  return (
    <ul className="list-group">
      {props.chicken.map((chick, index) => (
        <ListItem
          key={index}
          index={index}
          current={props.current}
          chick={chick}
        />
      ))}
    </ul>
  );
};

export default List;
