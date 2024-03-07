"use client"

import  { useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import itemsData from "./items.json";

export default function Page () {
   
  const[items, setItems] = useState(itemsData);

  function handleAddItem(newItem) {
    setItems([...items, newItem]);
  }

  return (
    <main>
      <div className="max-w-sm m-2">
        <h1 className="text-4xl font-semibold mb-4">Shopping List</h1>
        <NewItem onAddItem={handleAddItem} className=""/>
        <ItemList items={items} />
      </div>
     </main>
  );
};