import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import CheckIcon from "./../images/icon-check.svg";
import CrossIcon from "./../images/icon-cross.svg";

const Container = styled.div`
  border-radius: ${props => props.isDragging ? '5px' : '0'};
  box-shadow: ${props => props.isDragging ? '0 0 15px #4d7cff' : 'none'};
`;

export default function TodoItem({ todo, index, handleCheck, handleRemove }) {
  return (
    <Draggable draggableId={todo.id} index={index}>
      {(provided, snapshot) => (
        <Container
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          <div
            className={`${
              todo.isCompleted ? "checked" : ""
            } d-flex justify-content-between align-items-center list-group-item border-0`}
          >
            <div className="row flex-grow-1 justify-content-center align-items-center">
              <div className="col-1 align-items-center">
                <div
                  className="check-container bg-check mx-auto"
                  onClick={() => handleCheck(todo.id)}
                >
                  <img src={CheckIcon} alt="check" />
                </div>
              </div>
              <div className="col-10 d-flex not-finished">
                <p className="align-self-end px-2 px-sm-0 todo-text">{todo.content}</p>
              </div>
              <div className="col-1 p-0" onClick={() => todo.isCompleted ? handleRemove(todo.id) : null}>
                <img className={`cross-icon mx-auto ${todo.isCompleted ? "opacity-1" : ""}`} src={CrossIcon} alt="erase" />
              </div>
            </div>
          </div>
        </Container>
      )}
    </Draggable>
  );
}
