import React from "react";
import CheckIcon from "./../images/icon-check.svg";
import CrossIcon from "./../images/icon-cross.svg";

export default function ItemList({ todoList }) {
  
  const list = todoList.map((todo) => {
    return (
      <div
        key={todo.id}
        className="list-group-item border-0 p-4 align-items-center"
      >
        <div className="row align-items-center">
          <div className="col-1 px-2">
            <div className="check-container bg-check mx-auto">
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
  });
  return (
    <div className="list-group shadow my-5 border-radius">
      {list}
      <div className="list-group-item  p-4 border-0 d-flex justify-content-between align-items-center">
        <p>
          <span className="remain-item">3</span> items left
        </p>
        <div className="filter-menu-desktop">
          <span className="menu-item active mx-4">All</span>
          <span className="menu-item mx-4">Active</span>
          <span className="menu-item mx-4">Completed</span>
        </div>
        <p className="menu-item">Clear Completed</p>
      </div>
    </div>
  );
}
