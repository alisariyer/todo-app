import React, { useState, useReducer, useEffect } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import ItemList from "./components/ItemList";
import FilterMenu from "./components/FilterMenu";
import { nanoid } from "nanoid";

export default function App() {

  const [isLightTheme, toggleTheme] = useReducer(prevState => !prevState, false);

  const [todoList, setTodoList] = useState(() => JSON.parse(localStorage.getItem('todoList')) || [ { id: 0, content: 'Hey, press Enter to save your Todo', isCompleted: false}]);

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList))
    console.warn('useEffect ran!');
  }, [todoList])

  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = (e) => {
    if (e.code === 'Enter' || e.code === 'NumpadEnter' || e.key === 'Enter' || e.key === 'NumpadEnter') {
      if (newTodo.trim().length !== 0) {
        setTodoList([...todoList, { id: nanoid(), content: newTodo}])
        setNewTodo('');
      }
    }
  }

  const handleCheck = (todoId) => {
    setTodoList(prevTodoList => prevTodoList.map(
      todo => todo.id !== todoId ? todo : {
        id: todo.id,
        content: todo.content,
        isCompleted: !todo.isCompleted
      }
    ))
  }

  return (
    <div className={`container-fluid p-5 ${isLightTheme ? "light-theme" : ""}`}>
      <div className="bg"></div>
      <Header toggleTheme={toggleTheme}/>
      <Input 
        newTodo={newTodo} 
        onTodoChange={(value) => setNewTodo(value)}
        onTodoKeyPress={handleAddTodo}
      />
      <ItemList todoList={todoList} handleCheck={handleCheck}/>
      <FilterMenu />
      <div className="instructions text-center my-5">
        Drag and drop to reorder list
      </div>
    </div>
  );
}
