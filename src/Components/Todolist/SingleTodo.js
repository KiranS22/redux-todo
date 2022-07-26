import React, { useState } from "react";
import { completeOrNot, deleteTodo } from "../../features/todoSlice";
import { useDispatch } from "react-redux";
import "./todo.css";

const SingleTodo = ({ t }) => {
  const [isComplete, setIsComplete] = useState(t.isComplete);
  const dispatch = useDispatch();

  const toggleCompletion = (id) => {
    setIsComplete(!isComplete);
    dispatch(completeOrNot(id));
  };
  const handleDel = (id) => {
    dispatch(deleteTodo(id));
  };
  const task = (
    <li className="todos flex justify-space-b complete">
      {t.todo}
      <button className="delete" onClick={() => handleDel(t.id)}>
        <img
          src="https://img.icons8.com/external-tulpahn-detailed-outline-tulpahn/64/000000/external-bin-mobile-user-interface-tulpahn-detailed-outline-tulpahn.png"
          alt="Delete"
          className="del-img"
        />
      </button>{" "}
      <input
        type="checkbox"
        defaultChecked={isComplete}
        onChange={() => toggleCompletion(t.id)}
      />
    </li>
  );

  return (
    <>
      {isComplete ? (
        task
      ) : (
        <li className="todos flex justify-space-b">
          {t.todo}
          <button className="delete" onClick={() => handleDel(t.id)}>
          <img
          src="https://img.icons8.com/external-tulpahn-detailed-outline-tulpahn/64/000000/external-bin-mobile-user-interface-tulpahn-detailed-outline-tulpahn.png"
          alt="Delete"
          className="del-img"
        />
          </button>{" "}
          <input
            type="checkbox"
            defaultChecked={isComplete}
            onChange={() => toggleCompletion(t.id)}
          />
        </li>
      )}
    </>
  );
};

export default SingleTodo;
