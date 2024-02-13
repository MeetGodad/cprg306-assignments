
"use client";

import { useState } from 'react';
import Item from './item.js';
import items from './items.json';

export default function ItemList() {
  const [sortBy, setSortBy] = useState('name');
  const [groupByCategory, setGroupByCategory] = useState(false);

  const handleSortByName = () => {
    setSortBy('name');
  };

  const handleSortByCategory = () => {
    setSortBy('category');
  };

  const handleGroupByCategory = () => {
    setGroupByCategory(!groupByCategory);
  };

  const sortedItems = groupByCategory
    ? items
        .sort((a, b) => a.category.localeCompare(b.category))
        .reduce((acc, item) => {
          const existingCategory = acc.find(
            category => category.category === item.category
          );

          if (existingCategory) {
            existingCategory.items.push(item);
          } else {
            acc.push({ category: item.category, items: [item] });
          }

          return acc;
        }, [])
    : items.sort((a, b) => {
        if (sortBy === 'name') {
          return a.name.localeCompare(b.name);
        } else if (sortBy === 'category') {
          return a.category.localeCompare(b.category);
        }
      });

  return (
    <main className="p-4">
      <div className="mb-4">
        <button
          className={"bg-blue-500 text-white px-4 py-2 rounded active:bg-blue-950 "}
          onClick={handleSortByName}
        >
          Sort by Name
        </button>
        <button
          className={"bg-blue-500 text-white px-4 py-2 rounded ml-2 active:bg-blue-950 "}
          onClick={handleSortByCategory}
        >
          Sort by Category
        </button>
        <button
          className={"bg-blue-500 text-white px-4 py-2 rounded ml-2 active:bg-blue-950 "}
          onClick={handleGroupByCategory}
        >
          Group by Category
        </button>
      </div>
      {sortedItems.map((item, index) => {
        return groupByCategory ? (
          <div key={index}>
            <h2 className="text-2xl font-semibold mb-4">{item.category}</h2>
            {item.items.map((item, index) => (
              <Item key={index} {...item} />
            ))}
          </div>
        ) : (
          <Item key={index} {...item} />
        );
      })}
    </main>
  );
}