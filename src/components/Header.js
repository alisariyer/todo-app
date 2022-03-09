import React from "react";

export default function Header() {
  return (
    <header className="d-flex justify-content-between align-items-start mb-5">
      <h1 className="bold text-white m-0">TODO</h1>
      <img className="theme-btn pt-1" src="./images/icon-sun.svg" alt="light theme icon" />
    </header>
  );
}
