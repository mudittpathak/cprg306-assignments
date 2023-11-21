import React, { useState } from 'react';
import Item from './item'; 

const ItemList = ({ items, onItemSelect }) => {
  const [sortBy, setSortBy] = useState("name");

  
  const sortedItems = [...items].sort((a, b) => {
    if (sortBy === "name") return a.name.localeCompare(b.name);
    if (sortBy === "category") return a.category.localeCompare(b.category);
    return 0;
  });

  return (
    <div>
      <ul>
        {sortedItems.map(item => (
         
          <Item key={item.id} {...item} onSelect={() => onItemSelect(item.name)} />
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
