import React, { useState } from "react";

export default function Input(props) {
  const [content, setContent] = useState("");
  const handleChange = (e) => {
    const value = e.target.value;
    setContent(value);
  };
  const { handleClickAdd } = props //destructuring

  const hanldeClickAddLocal = () => {
    handleClickAdd(content)
  }
  
  return (
    <div className="card__add">
      <input
        id="newTask"
        type="text"
        placeholder="Enter an activity..."
        value={content}
        onChange={handleChange}
      />
      <button id="addItem" status="todo" onClick={hanldeClickAddLocal}>
        <i className="fa fa-plus"></i>
      </button>
    </div>
  );
}
