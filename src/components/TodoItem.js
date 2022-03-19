import React from "react";
import CheckIcon from "./../images/icon-check.svg";
import CrossIcon from "./../images/icon-cross.svg";

export default function TodoItem({ todo, handleCheck }) {
console.log(todo);
  return (
    <div
      className={`${todo.isCompleted ? "checked" : ""} list-group-item border-0 p-4 align-items-center`}
    >
      <div className="row align-items-center">
        <div className="col-1 px-2">
          <div className="check-container bg-check mx-auto" onClick={() => handleCheck(todo.id)}>
            <img src={CheckIcon} alt="check" />
          </div>
        </div>
        <div className="col-10 px-4 not-finished">
          <p className="todo-text">{todo.content}</p>
        </div>
        <div className="col-1 px-2 text-center">
          <img className="cross-icon" src={CrossIcon} alt="check" />
        </div>
      </div>
    </div>
  );
}
