// src/components/list.jsx
import React from "react";
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
          handleDelete={() => props.handleDelete(index)}
        />
      ))}
    </ul>
  );
};

export default List;
