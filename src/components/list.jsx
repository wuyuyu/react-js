// src/components/list.jsx
import React from "react";
import ListItem from "./listItem.jsx";

const List = (props) => {
  const { current, product, onProductPrevious,onProductNext } = props;

  return (
    <div>
      <ul className="list-group">
        {props.products.slice(0, 5).map((product, index) => (
          <ListItem
            key={index}
            index={index}
            current={props.current}
            product={product}
            handleDelete={() => props.handleDelete(index)}
          />
        ))}
      </ul>
      <button type="button" onClick={onProductPrevious} class="btn btn-secondary">
        Previous
      </button>
      <button type="button" onClick={onProductNext} class="btn btn-secondary">
        Next
      </button>
    </div>
  );
};

export default List;
