import React from "react";
import CheckIcon from "./../images/icon-check.svg";

export default function Input({
  newTodo,
  onTodoChange,
  onTodoKeyPress,
  handleSelectAll,
  selectAll,
}) {
  return (
    <div className="list-group">
      <div className="list-group-item border-radius border-0 p-4">
        <div className="row">
          <div className={`col-1 ${selectAll ? "checked" : ""}`}>
            <div
              className="check-container bg-check mx-auto"
              onClick={() => handleSelectAll()}
            >
              <img src={CheckIcon} alt="check" />
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
              autoFocus
            />
          </div>
        </div>
      </div>
    </div>
  );
}
