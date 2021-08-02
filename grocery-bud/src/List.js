import React from "react";
import { FaEdit, FaTrash } from 'react-icons/fa';
const List = ({ item, removeItem, editItem }) => {
  const { title, id } = item;
  return (
    <article className="grocery-item">
      <p className="title" key={id}>
        {title}
      </p>
      <div className="btn-container">
        <button type="button" className="edit-btn" onClick={() => editItem(id)}>
          <FaEdit />
        </button>
        <button
          type="button"
          className="delete-btn"
          onClick={() => removeItem(id)}
        >
          <FaTrash />
        </button>
        <button type="button" className="clear-btn">
          Clear
        </button>
      </div>
    </article>
  );
};

export default List;
