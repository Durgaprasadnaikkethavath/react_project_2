import React from "react";

const GroceryList = () => {
  const groceryItems = [
    { id: 1, name: "Bread", price: 2 },
    { id: 1, name: "Butter", price: 4 },
    { id: 1, name: "Milk", price: 10 },
  ];
  return (
    <>
      <div className="groceryList">
        <h1>GroceryList</h1>
      </div>
    </>
  );
};

export default GroceryList;
