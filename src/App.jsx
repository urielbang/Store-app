import { useState } from "react";
import NavBar from "./components/NavBar";
import items from "./data/data";
import BarCategories from "./components/BarCategories";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [itemsData, setItemsData] = useState(items);

  return (
    <div>
      <NavBar />
      <BarCategories />
    </div>
  );
}

export default App;
