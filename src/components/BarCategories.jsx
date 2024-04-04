import React, { useEffect, useState } from "react";
import items from "../data/data";
import CardProduct from "./CardProduct";
import Cart from "./Cart";
import { FaShoppingCart } from "react-icons/fa";

export default function BarCategories() {
  const [categoryDisplay, setCategoryDisplay] = useState(items);

  const handleClick = (e) => {
    const renderdCategory = items.filter((item) => {
      return item.category === e.target.innerHTML;
    });

    setCategoryDisplay(renderdCategory);
  };
  const uniqueCategories = [...new Set(items.map((item) => item.category))];

  useEffect(() => {}, []);
  return (
    <>
      <div className="navBar">
        <ul>
          {uniqueCategories.map((category, index) => {
            return (
              <li key={index} onClick={handleClick}>
                {category}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="cart">
        <FaShoppingCart />
        <Cart />
      </div>
      <main className="containerCard">
        {categoryDisplay.map((item) => {
          return <CardProduct key={item.id} item={item} />;
        })}
      </main>
    </>
  );
}
