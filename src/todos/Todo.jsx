import React, { Fragment } from "react";
import PropTypes from "prop-types";
import "../style/style.css";
import { useState } from "react";
import url from "../constant/api";
import { useEffect } from "react";
import Input from './Input'
// const task = {
//   id
//   nametask
//   status
// }

function Todo(props) {
  const [list, setList] = useState([]);
  const [content, setContent] = useState("");

  useEffect(() => {}, []);

  const handleChange = (e) => {
    const value = e.target.value;
    setContent(value);
  };

  const handleClickAdd = () => {
    setList([
      ...list,
      {
        id: list[list.length - 1] ? list[list.length - 1].id - 1 : 1,
        content: content,
        status: "todo",
      },
    ]);
    setContent("");
  };

  const handleDelete = (id) => {
    setList(list.filter((item) => item.id !== id));
  };

  const handleChangeStatus = (id) => {
    const newList = [...list].map(item => {
      // if(item.id === id) {
      //   if(item.status === 'todo') {
      //     item.status = 'complete'
      //   } else if(item.status === 'complete') {
      //     item.status = 'todo'
      //   }
      // }
      // return item;
      return item.id === id ? 
      {
        ...item,
        status: item.status === 'todo' ? 'complete' : 'todo'
      } :
      item
    })
    setList(newList)
  }

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
            <Input content={content} handleChange={handleChange} handleClickAdd={handleClickAdd}/>
            <div
              id="notiInput"
              className="alert-danger"
              style={{ display: "none" }}
            ></div>
            <div className="card__todo">
              <ul className="todo" id="todo">
                {list.map((item) => {
                  return item.status === "todo" && (
                    <li key={item.id}>
                      <span>{item.content}</span>
                      <div className="buttons">
                        <button
                          className="remove"
                          onClick={() => handleDelete(item.id)}
                        >
                          <i className="fa fa-trash-alt"></i>
                        </button>
                        <button className="complete" onClick={() => handleChangeStatus(item.id)}>
                          <i className="far fa-check-circle"></i>
                          <i className="fas fa-check-circle"></i>
                        </button>
                      </div>
                    </li>
                  );
                })}
              </ul>
              <ul className="todo" id="completed">
                {list.map((item) => {
                  return item.status === "complete" &&(
                    <li key={item.id}>
                      <span>{item.content}</span>
                      <div className="buttons">
                        <button
                          className="remove"
                          onClick={() => handleDelete(item.id)}
                        >
                          <i className="fa fa-trash-alt"></i>
                        </button>
                        <button className="complete" onClick={() => handleChangeStatus(item.id)}>
                          <i className="far fa-check-circle"></i>
                          <i className="fas fa-check-circle"></i>
                        </button>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

Todo.propTypes = {};

export default Todo;
