import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./todo.css"
import {
  addTodo,
  selectTodoCount,
  selectTodos,
} from "../../features/todoSlice";
import SingleTodo from "./SingleTodo";
// {todo: '', id: num, isComplete: bool}
//}

const Todo = () => {
  const [todo, setTodo] = useState("");
  // useDispatch() returns a method.
  const dispatch = useDispatch();

  // useSelector accepts a method (selector Method), returns back the data.
  const todosCount = useSelector(selectTodoCount);
  const todos = useSelector(selectTodos);

  const handleClick = () => {
    const obj = {
      todo: todo,
      id: todosCount + 1,
      isComplete: false,
    };
    dispatch(addTodo(obj));
    setTodo('')
  };
  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  return (
    <div className="container">
      <div className="box flex">
      <input className="center-text"
        onChange={(e) => handleChange(e)}
        value={todo}
        type="text"
        placeholder="What do you have to do today?"
      />
      <button className="add" type="button" onClick={() => handleClick()}>
        Add Todo
      </button>
      </div>

      <div className="display-todos flex">
        {todos.map((t, index) => (
          <SingleTodo t={t}  />
        ))}
      </div>
    </div>
  );
};

export default Todo;
