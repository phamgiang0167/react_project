import React, { Fragment } from "react";
import PropTypes from "prop-types";
import "../style/style.css";
import { useState } from "react";
// const job = {
//   id: '',
//   content: '',
//   status: ''
// }
function Todo(props) {
  const [list, setList] = useState([
    
  ]);
  return (
    <Fragment>
      <div className="loader">
        <div className="loader__container">
          <div className="loader__spin"></div>
          <div className="loader__success">
            <i className="far fa-check-circle"></i>
          </div>
          <div className="loader__fail">
            <i className="far fa-times-circle"></i>
          </div>
          <div className="loader__content">aaa</div>
        </div>
      </div>
      <div className="card">
        <div className="card__header">
          <img src="./img/X2oObC4.png" />
        </div>
        <div className="card__body">
          <div className="card__content">
            <div className="card__title">
              <h2>My Tasks</h2>
              <p>September 9,2020</p>
            </div>
            <div className="card__add">
              <input
                id="newTask"
                type="text"
                placeholder="Enter an activity..."
              />
              <button id="addItem">
                <i className="fa fa-plus"></i>
              </button>
            </div>
            <div
              id="notiInput"
              className="alert-danger"
              style={{ display: "none" }}
            ></div>
            <div className="card__todo">
              <ul className="todo" id="todo">
                {list.map((item) => {
                  return (
                    <li>
                      <span>{item.content}</span>
                      <div class="buttons">
                        <button class="remove">
                          <i class="fa fa-trash-alt"></i>
                        </button>
                        <button class="complete">
                          <i class="far fa-check-circle"></i>
                          <i class="fas fa-check-circle"></i>
                        </button>
                      </div>
                    </li>
                  );
                })}
              </ul>
              <ul className="todo" id="completed"></ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

Todo.propTypes = {};

export default Todo;
