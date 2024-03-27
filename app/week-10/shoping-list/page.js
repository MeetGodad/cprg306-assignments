"use client"

import  { useEffect, useState } from "react";
import ItemList from "./item-list";
import NewItem from "./new-item";
import MealIdeas from "./meal-ideas";
import { useUserAuth } from "../_utils/auth-context";
import { getItems , addItem } from "../_services/shopping-list-service";
import Link from "next/link";



export default function Page () {
   
  const[items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  function handleItemSelect(item) {
    if (item && item.name) {
      const cleanedItemName = item.name
        .split(',')[0] // Remove the size
        .replace(/[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2580-\u27BF]|\uD83E[\uDD10-\uDDFF]/g, '') // Remove the emoji
        .trim();
      setSelectedItemName(cleanedItemName);
    }
  }
  async function handleAddItem(newItem) {
    const newItemWithId = { ...newItem, id: await addItem(user.uid, newItem) };
    setItems([...items, newItemWithId]);
  }

  async function loadItems() {
    const items = await getItems(user.uid);
    setItems(items);
  }

  useEffect(() => {
    if (user) {
      loadItems();
    }
  }, [user]);

  

  return (
    user ? (
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
    ) : 
   <Link href="./" className="flex text-xl m-8">Go Back an Sign In </Link>
  );
};