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
      <div className="list-group-item px-4 py-3">
        <div className="row align-items-center">
          <div className="col-1 px-2">
            <div className="img-container bg-check mx-auto">
              <img src="./images/icon-check.svg" alt="check" />
            </div>
          </div>
          <div className="col-10 px-4">
            <p>{word}</p>
          </div>
          <div className="col-1 px-2 text-center">
            <img src="./images/icon-cross.svg" alt="check" />
          </div>
        </div>
      </div>
    );
  });
  return <div className="list-group my-5 border"> {list}</div>;
}
