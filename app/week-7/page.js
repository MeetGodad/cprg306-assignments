"use client"

import  { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";
import MealIdeas from "./meal-ideas";



export default function Page () {
   
  const[items, setItems] = useState(itemsData);
  const [selectedItemName, setSelectedItemName] = useState("");

  function handleItemSelect(item) {
    const cleanedItemName = item.name
      .split(',')[0] // Remove the size
      .replace(/[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2580-\u27BF]|\uD83E[\uDD10-\uDDFF]/g, '') // Remove the emoji
      .trim();
    setSelectedItemName(cleanedItemName);
  }
  
  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  return (
    <main>
      <div className="flex">
      <div className="max-w-sm m-2">
        <h1 className="text-4xl font-semibold mb-4">Shopping List</h1>
          <div className=" pr-2">
            <NewItem onAddItem={handleAddItem} />
            <ItemList items={items} onItemSelect={handleItemSelect} />
          </div>
        </div>
        <div className="w-1/2 pl-2">
            <MealIdeas ingredient={selectedItemName} />
          </div>
      </div>
    </main>
  );
};