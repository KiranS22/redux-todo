import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./todo.css";
import {
  addTodo,
  deleteTodo,
  toggleCompletion,
  selectTodoCount,
  selectTodos,
} from "../../features/todoSlice";
// {todo: '', id: num, isComplete: bool}
//}

const Todo = () => {
  const [todo, setTodo] = useState("");
  // useDispatch() returns a method.
  const dispatch = useDispatch();

  // useSelector accepts a method (selector Method), returns back the data.
  const todosCount = useSelector(selectTodoCount);
  const todos = useSelector(selectTodos);
  const obj = {
    todo: todo,
    id: todosCount + 1,
    isComplete: false,
  };

  const handleClick = () => {
    dispatch(addTodo(obj));
  };
  const handleChange = (e) => {
    setTodo(e.target.value);
  };
  const handleDel = (id) => {
    dispatch(deleteTodo(id));
  };
  return (
    <div className="container">
      <input
        onChange={(e) => handleChange(e)}
        value={todo}
        type="text"
        placeholder="What do you have to do today?"
      />
      <button type="button" onClick={() => handleClick()}>
        Add Todo
      </button>
      <div className="display-todos">
        {todos.map((t, index) => (
          <li key={index}>
            {t.todo}
            <button onClick={() =>handleDel(t.id)}>Delete</button>
          </li>
        ))}
      </div>
    </div>
  );
};

export default Todo;
