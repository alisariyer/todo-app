import React from "react";

export default function Header({ toggleTheme }) {
  return (
    <header className="d-flex justify-content-between align-items-start mb-5">
      <h1 className="bold text-white m-0">TODO</h1>
      <div className="btn-theme" onClick={() => toggleTheme()}></div>
    </header>
  );
}
