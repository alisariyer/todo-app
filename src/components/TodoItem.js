import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import CheckIcon from "./../images/icon-check.svg";
import CrossIcon from "./../images/icon-cross.svg";

const Container = styled.div`
  border-radius: ${props => props.isDragging ? '5px' : '0'};
  box-shadow: ${props => props.isDragging ? '0 0 15px #F0E61A' : 'none'};
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
            } list-group-item border-0 py-3 justify-content-center align-items-center`}
          >
            <div className="row justify-content-center align-items-center">
              <div className="col-1">
                <div
                  className="check-container bg-check"
                  onClick={() => handleCheck(todo.id)}
                >
                  <img src={CheckIcon} alt="check" />
                </div>
              </div>
              <div className="col-10 not-finished">
                <p className="px-2 px-sm-0 todo-text">{todo.content}</p>
              </div>
              <div className="col-1 p-0" onClick={() => todo.isCompleted ? handleRemove(todo.id) : null}>
                <img className={`cross-icon ${todo.isCompleted ? "opacity-1" : ""}`} src={CrossIcon} alt="erase" />
              </div>
            </div>
          </div>
        </Container>
      )}
    </Draggable>
  );
}
