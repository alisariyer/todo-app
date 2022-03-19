import React from "react";
import TodoItem from "./TodoItem";

export default function ItemList({ todoList, handleCheck }) {
 
  const list = todoList.map((todo) => {
    return <TodoItem key={todo.id} todo={todo} handleCheck={handleCheck}/>;
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
