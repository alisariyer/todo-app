import React from "react";

export default function ItemList() {
  const list = [
    "Enhance todo project",
    "Simplify codes",
    "Check modularity",
    "Test application",
    "Test in different browser",
    "Test in different devices",
  ].map((word) => {
    return (
      <div className="list-group-item border-0 p-4 align-items-center">
        <div className="row align-items-center">
          <div className="col-1 px-2">
            <div className="check-container bg-check mx-auto">
              <img src="./images/icon-check.svg" alt="check" />
            </div>
          </div>
          <div className="col-10 px-4 not-finished">
            <p>{word}</p>
          </div>
          <div className="col-1 px-2 text-center">
            <img src="./images/icon-cross.svg" alt="check" />
          </div>
        </div>
      </div>
    );
  });
  return (
    <div className="list-group shadow my-5 border-radius">   
      {list}
      <div className="list-group-item  p-4 border-0 d-flex justify-content-between align-items-center">
        <p><span className="remain-item">3</span> items left</p>
        <p>Clear Completed</p>
      </div>  
    </div>);
}
