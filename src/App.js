import React from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import ItemList from "./components/ItemList";
import FilterMenu from "./components/FilterMenu";

export default function App() {
  return (
    <div className="container-fluid p-5">
      <div className="bg"></div>
      <Header />
      <Input />
      <ItemList />
      <FilterMenu />
      <div className="instructions text-center my-5">
        Drag and drop to reorder list
      </div>
    </div>
  );
}
