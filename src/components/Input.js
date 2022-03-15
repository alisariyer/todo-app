import React from "react";

export default function Input( {newTodo, onTodoChange, onTodoKeyPress}) {
  return (
    <div className="list-group">
      <div className="list-group-item border-radius border-0 p-4">
        <div className="row">
          <div className="col-1">
            <div className="check-container">
            </div>
          </div>
          <div className="col-11">
            <input 
              onKeyPress={(e) => onTodoKeyPress(e)}
              onChange={(e) => onTodoChange(e.target.value)} 
              value={newTodo}
              className="todo-input"
              type="text" 
              placeholder="Type todo here"
              autoFocus />
          </div>
        </div>
      </div>
    </div>
  );
}
