import React, { useReducer } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import ItemList from "./components/ItemList";
import FilterMenu from "./components/FilterMenu";

export default function App() {

  const [isLightTheme, toggleTheme] = useReducer(prevState => !prevState, false);
  console.log(isLightTheme)
  return (
    <div className={`container-fluid p-5 ${isLightTheme ? "light-theme" : ""}`}>
      <div className="bg"></div>
      <Header toggleTheme={toggleTheme}/>
      <Input />
      <ItemList />
      <FilterMenu />
      <div className="instructions text-center my-5">
        Drag and drop to reorder list
      </div>
    </div>
  );
}
