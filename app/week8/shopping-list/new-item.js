import React, { useState } from 'react';

const NewItem = ({ onAddItem }) => {
  const [itemName, setItemName] = useState("");
  const [amount, setAmount] = useState(1);
  const [itemType, setItemType] = useState("fruits");

  const handleSubmit = (e) => {
    e.preventDefault();

    onAddItem({
      name: itemName,
      quantity: quantity,
      category: category
    });
 
    setItemName("");
    setQuantity(1);
    setCategory("Item");
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