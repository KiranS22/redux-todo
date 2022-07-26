import React, { useState } from "react";
import { completeOrNot, deleteTodo } from "../../features/todoSlice";
import { useDispatch } from "react-redux";
import "./todo.css";

const SingleTodo = ({ t }) => {
  const [isComplete, setIsComplete] = useState(t.isComplete);
  const dispatch = useDispatch();


  

  const toggleCompletion = (id) => {
    setIsComplete(!isComplete);
    dispatch(completeOrNot(id))
    const box = 
    <input type="checkbox" style={{ textDecoration: "strikeThrough" }} />

    isComplete ? {box} :<input type="checkbox" style={{ textDecoration: "strikeThrough" }} />;
  };
  const handleDel = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <>
      <li className="todos flex justify-space-b">
        {t.todo}
        <button className="delete" onClick={() => handleDel(t.id)}>
          Delete
        </button>{" "}
        <input
          type="checkbox"
          defaultChecked={isComplete}
          onChange={() => toggleCompletion(t.id)}
        />
      </li>
    </>
  );
};

export default SingleTodo;
