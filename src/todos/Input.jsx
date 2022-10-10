import React from "react";

export default function Input(props) {
  const { content, handleChange, handleClickAdd } = props //destructuring
  return (
    <div className="card__add">
      <input
        id="newTask"
        type="text"
        placeholder="Enter an activity..."
        value={content}
        onChange={handleChange}
      />
      <button id="addItem" status="todo" onClick={handleClickAdd}>
        <i className="fa fa-plus"></i>
      </button>
    </div>
  );
}
