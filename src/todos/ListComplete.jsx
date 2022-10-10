import React from "react";

export default function ListComplete(props) {
  const { list, handleDelete, handleChangeStatus } = props
  return (
    <ul className="todo" id="todo">
      {list.map((item) => {
        return (
          item.status === "complete" && (
            <li key={item.id}>
              <span>{item.content}</span>
              <div className="buttons">
                <button
                  className="remove"
                  onClick={() => handleDelete(item.id)}
                >
                  <i className="fa fa-trash-alt"></i>
                </button>
                <button
                  className="complete"
                  onClick={() => handleChangeStatus(item.id)}
                >
                  <i className="far fa-check-circle"></i>
                  <i className="fas fa-check-circle"></i>
                </button>
              </div>
            </li>
          )
        );
      })}
    </ul>
  );
}
