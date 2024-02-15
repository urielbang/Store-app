import React, { useState } from "react";
import { useEffect } from "react";

export default function CardProduct({ item }) {
  const [itemsProducts, setItems] = useState([]);
  const handleClick = () => {
    // Get current items from local storage
    const savedItems = JSON.parse(localStorage.getItem("items"));
    let items = [];

    if (savedItems) {
      items = [...savedItems];
    }

    // Add the new item
    items.push(item);

    // Save the updated items to local storage
    localStorage.setItem("items", JSON.stringify(items));
  };
  useEffect(() => {
    const savedItems = localStorage.getItem("items");
    if (savedItems) {
      setItems(JSON.parse(savedItems));
    }
  }, []);
  console.log(itemsProducts);
  return (
    <div className="cardProduct">
      <p className="emoji">{item.emoji}</p>
      <span>{item.name}</span>
      <p>{item.price} ₪</p>
      <button onClick={handleClick} className="button-37">
        Add to cart
      </button>
    </div>
  );
}
