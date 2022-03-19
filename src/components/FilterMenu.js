import React from "react";

export default function FilterMenu( { showStatus, handleShowStatus }) {
  return (
    <div className="filter-menu-mobile list-group shadow">
      <div className="list-group-item  border-radius border-0 d-flex justify-content-center align-items-center">
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
    </div>
  );
}
