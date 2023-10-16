"use client";
import { useState } from 'react';
import Item from './item';
import itemsData from './items.json';

function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  const sortedItems = [...itemsData].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "category") return a.category.localeCompare(b.category);
  });

  return (
    <div>
      <button 
        onClick={() => setSortBy("name")} 
        style={{backgroundColor: sortBy === "name" ? 'green' : 'transparent'}}
      >
        Sort by Name
      </button>
      <button 
        onClick={() => setSortBy("category")} 
        style={{backgroundColor: sortBy === "category" ? 'pink' : 'transparent'}}
      >
        Sort by Category
      </button>
      <ul>
        {sortedItems.map(item => <Item key={item.id} {...item} />)}
      </ul>
    </div>
  );
}
export default ItemList;