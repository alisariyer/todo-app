import React, { useState, useReducer, useEffect } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import ItemList from "./components/ItemList";
import FilterMenu from "./components/FilterMenu";
import { nanoid } from "nanoid";

export default function App() {

  const [isLightTheme, toggleTheme] = useReducer(prevState => !prevState, false);

  const [todoList, setTodoList] = useState(() => JSON.parse(localStorage.getItem('todoList')) || [ { id: 0, content: 'Hey, press Enter to save your Todo', isCompleted: false}]);
  
  // to manage no-completed todo item number
  const [remainingTodos, setRemainingTodos] = useState(() => todoList.filter(todo => todo.isCompleted).length)
  
  const [newTodo, setNewTodo] = useState('');

  const [selectAll, setSelectAll] = useState(false);
  
  // 0: All (default), 1: Active, 2: Completed
  const [showStatus, setShowStatus] = useState(0);

  const filteredTodoList = todoList.filter(todo => {
    console.log('todo');
    if (showStatus === 1) {
      return !todo.isCompleted
    } else if (showStatus === 2) {
      return todo.isCompleted
    } 
    return true;
  })
  
  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList))
    setRemainingTodos(todoList.filter(todo => !todo.isCompleted).length);
    console.warn('useEffect ran!');
  }, [todoList])


  const handleAddTodo = (e) => {
    if (e.code === 'Enter' || e.code === 'NumpadEnter' || e.key === 'Enter' || e.key === 'NumpadEnter') {
      if (newTodo.trim().length !== 0) {
        setTodoList([...todoList, { id: nanoid(), content: newTodo, isCompleted: false}])
        setNewTodo('');
      }
    }
  }

  // to handle checked todo item indicating completed
  const handleCheck = (todoId) => {
    setTodoList(prevTodoList => prevTodoList.map(
      todo => todo.id !== todoId ? todo : {
        id: todo.id,
        content: todo.content,
        isCompleted: !todo.isCompleted
      }
    ))
  }

  const handleShowStatus = (statusCode) => {
    setShowStatus(statusCode);
  }

  const handleClearCompleted = () => {
    setTodoList(prevTodoList => prevTodoList.filter(
      todo => !todo.isCompleted
    ))
  }

  const handleSelectAll = () => {
    setSelectAll(prevState => !prevState);
  }
  
  useEffect(() => {
    setTodoList( prevTodoList => prevTodoList.map(todo => ({...todo, isCompleted: selectAll})));
  }, [selectAll])

  return (
    <div className={`container-fluid p-5 ${isLightTheme ? "light-theme" : ""}`}>
      <div className="bg"></div>
      <Header toggleTheme={toggleTheme}/>
      <Input 
        newTodo={newTodo} 
        onTodoChange={(value) => setNewTodo(value)}
        onTodoKeyPress={handleAddTodo}
        selectAll={selectAll}
        handleSelectAll={handleSelectAll}
      />
      <ItemList 
        remainingTodos={remainingTodos}
        todoList={filteredTodoList} 
        handleCheck={handleCheck}
        showStatus={showStatus}
        handleShowStatus={handleShowStatus}
        handleClearCompleted={handleClearCompleted}
      />
      <FilterMenu showStatus={showStatus} handleShowStatus={handleShowStatus}/>
      <div className="instructions text-center my-5">
        Drag and drop to reorder list
      </div>
    </div>
  );
}
