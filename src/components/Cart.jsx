import React from "react";

export default function Cart() {
  const items = JSON.parse(localStorage.getItem("items"));
  console.log(items);
  return (
    <div className="cartContainer">
      {items.map((item, index) => {
        return (
          <div key={index} className="cardProduct">
            <p className="emoji">{item.emoji}</p>
            <span>{item.name}</span>
            <p>{item.price} ₪</p>
          </div>
        );
      })}
    </div>
  );
}
