import React, { useState } from 'react';
import axios from 'axios';
import { setUserSession } from './Utils/Common';
import firebase from "firebase/app";
import "firebase/auth";
import "./plugins/firebase.js"
import TextField from '@material-ui/core/TextField';
import Button from 'react-bootstrap/Button';




function Todo() {
  const [todos, setTodos] = useState([
    {name: "First item", done: false },
    {name: "Second item", done: false },
    {name: "Third item", done: false}
  ]);

  const [textField, setTextField] = useState("")

  const handleClick = () => {
    var temp = copy(todos);
    temp.push({name: textField, done: false});
    setTodos(temp);
  }

  const copy = (array) => {
    var newArray = []
    for (var i=0;i<array.length;i++){
      newArray[i] = array[i];
    }
    return newArray
  }
  
  return (
    <div>
      <div className="d-flex justify-content-center">
        <form noValidate autoComplete="off">
          <TextField id="standard-basic" label="Add a task" value={textField}/>
        </form>
        <button type="button" class="btn btn-secondary" onClick={handleClick()}>Secondary</button>
      
      <div>
      </div>
        <div>
        {todos.map(todo => (
          <div className="d-flex justify-content-center">
            <div className="box my-2">
              {todo.name}
              {todo.message}
            </div>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}


export default Todo;