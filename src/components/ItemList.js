import React from "react";
import TodoItem from "./TodoItem";

export default function ItemList({ todoList, handleCheck, remainingTodos, showStatus, handleShowStatus, handleClearCompleted }) {

  const list = todoList.map((todo) => {
    return <TodoItem key={todo.id} todo={todo} handleCheck={handleCheck}/>;
  });
  
  return (
    <div className="list-group shadow my-5 border-radius">
      {list}
      <div className="list-group-item  p-4 border-0 d-flex justify-content-between align-items-center">
        <p>
          <span className="remain-item">{remainingTodos}</span> items left
        </p>
        <div className="filter-menu-desktop">
          <span
            className={`menu-item mx-4 ${showStatus === 0 ? "active" : ""}`}
            onClick={() => handleShowStatus(0)}
          >All</span>
          <span 
            className={`menu-item mx-4 ${showStatus === 1 ? "active" : ""}`}
            onClick={() => handleShowStatus(1)}
          >Active</span>
          <span
            className={`menu-item mx-4 ${showStatus === 2 ? "active" : ""}`}
            onClick={() => handleShowStatus(2)}
          >Completed</span>
        </div>
        <p className="menu-item" onClick={() => handleClearCompleted()}>Clear Completed</p>
      </div>
    </div>
  );
}
