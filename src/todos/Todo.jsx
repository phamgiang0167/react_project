import React, { Fragment } from "react";
import PropTypes from "prop-types";
import '../style/style.css'
function Todo(props) {
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
              style={{display: 'none'}}
            ></div>
            <div className="card__todo">
              <ul className="todo" id="todo"></ul>
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
