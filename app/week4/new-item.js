"use client";
import React, { useEffect, useState } from 'react';

const NewItem = () => {
  const [itemName, setItemName] = useState("");
  const [amount, setAmount] = useState(1);
  const [itemType, setItemType] = useState("fruits");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const itemData = { itemName, amount, itemType };
    console.log(productData);
    alert(`Item: ${itemName}, Amount: ${amount}, Type: ${itemType}`);
    setItemName("");
    setAmount(1);
    setItemType("fruits");
  }; 
  
  return (
    <form onSubmit={handleFormSubmit}>
      
      <input type="text" value={ItemName} onChange={(e) => setItemName(e.target.value)} required />
      
      <input type="number" min="1" max="100" value={amount} onChange={(e) => setAmount(Number(e.target.value))} required />
      
      <select value={ItemType} onChange={(e) => setItemType(e.target.value)}>
        <option value="fruits">Fruits</option>
        <option value="vegetables">Vegetables</option>
      </select>
      
      <button type="submit">Add Item</button>
    </form>
  );
};

export default NewItem;
