import React, { Fragment } from "react";
import PropTypes from "prop-types";
import "../style/student.css";
import { useState } from "react";
import { useEffect } from "react";

function Student(props) {
  const [id, setId] = useState(0)
  const [name, setName] = useState('')
  const [classStudent, setClassStudent] = useState('')
  const [listStudent, setListStudent] = useState([]);

  useEffect(() => {
    if(id > 0) {
      const data = {
        id: id,
        name: name,
        class: classStudent
      }
      setListStudent([
        ...listStudent,
        data
      ])
    }
  }, [id])

  const handleChangeName = (e) => {
    const value = e.target.value
    setName(value)
  }

  const handleChangeClass = (e) => {
    const value = e.target.value
    setClassStudent(value)
  }

  const handleOk = () => {
    setId(id + 1)
  }
  return (
    <Fragment>
      <div>name</div>
      <input style={{margin: '20px 0'}} onChange={handleChangeName}></input>
      <div>class</div>
      <input style={{margin: '20px 0'}} onChange={handleChangeClass}></input>
      <div>
        <button onClick={handleOk}>ok</button>
      </div>
      <table id="customers" style={{ width: "100%" }} >
        <tr>
          <th>id</th>
          <th>name</th>
          <th>class</th>
        </tr>
        {listStudent.map((ele, index) => {
          return (
            <tr>
              <td>{ele.id}</td>
              <td>{ele.name}</td>
              <td>{ele.class}</td>
            </tr>
          );
        })}
      </table>
    </Fragment>
  );
}

Student.propTypes = {};

export default Student;
