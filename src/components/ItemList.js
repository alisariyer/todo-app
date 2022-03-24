import React from "react";
import TodoItem from "./TodoItem";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

const Container = styled.div`
  background-color: transparent;
  border-radius: 5px 5px 0 0;
  overflow: hidden;
`;

export default function ItemList({
  todoList,
  handleCheck,
  remainingTodos,
  showStatus,
  handleShowStatus,
  handleRemove,
}) {
  const list = todoList.map((todo, index) => {
    return (
      <TodoItem
        key={todo.id}
        index={index}
        todo={todo}
        handleCheck={handleCheck}
        handleRemove={handleRemove}
      />
    );
  });

  return (
    <div className="list-group shadow my-5 border-radius">
      <Droppable droppableId="x">
        {(provided, snapshot) => (
          <Container
            ref={provided.innerRef}
            {...provided.droppableProps}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {list}
            {provided.placeholder}
          </Container>
        )}
      </Droppable>
      <div className="list-status-item  p-4 border-0 d-flex justify-content-between align-items-center">
        <p>
          <span className="remain-item">{remainingTodos}</span> items left
        </p>
        <div className="filter-menu-desktop">
          <span
            className={`menu-item mx-4 ${showStatus === 0 ? "active" : ""}`}
            onClick={() => handleShowStatus(0)}
          >
            All
          </span>
          <span
            className={`menu-item mx-4 ${showStatus === 1 ? "active" : ""}`}
            onClick={() => handleShowStatus(1)}
          >
            Active
          </span>
          <span
            className={`menu-item mx-4 ${showStatus === 2 ? "active" : ""}`}
            onClick={() => handleShowStatus(2)}
          >
            Completed
          </span>
        </div>
        <p className="menu-item" onClick={() => handleRemove()}>
          Clear Completed
        </p>
      </div>
    </div>
  );
}
