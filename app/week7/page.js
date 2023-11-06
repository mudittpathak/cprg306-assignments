import React, { useState } from 'react';
import NewItem from './NewItem'; 
import ItemList from './ItemList'; 
import MealIdeas from './MealIdeas'; 

const Page = () => {
  const [items, setItems] = useState([]);
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleItemSelect = (itemName) => {

    const cleanedItemName = itemName.replace(/[\u2700-\u27BF\uE000-\uF8FF\u2011-\u26FF -]+/g, '').split(',')[0].trim();
    setSelectedItemName(cleanedItemName);
  };

  const handleAddItem = (item) => {
    setItems([...items, item]);
  };

  return (
    <main className="bg-black-100 p-4 flex">
      <div>
        <h1 className="text-2xl font-bold mb-4 text-red-600">Shopping List</h1>
        <NewItem onAddItem={handleAddItem} />
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <MealIdeas ingredient={selectedItemName} />
    </main>
  );
};

export default Page;
