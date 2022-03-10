import React from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import ItemList from "./components/ItemList";

export default function App() {
  return (
    <div className="container-fluid p-5">
      <Header />
      <Input />
      <ItemList />
    </div>
  );
}
