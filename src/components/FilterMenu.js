import React from "react";

export default function FilterMenu() {
  return (
    <div className="filter-menu-mobile list-group shadow">
      <div className="list-group-item  border-radius border-0 d-flex justify-content-center align-items-center">
        <span className="menu-item active mx-4">All</span>
        <span className="menu-item mx-4">Active</span>
        <span className="menu-item mx-4">Completed</span>
      </div>
    </div>
  );
}
