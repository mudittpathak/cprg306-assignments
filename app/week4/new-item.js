"use client";
import React, { useEffect, useState } from 'react';

const NewProduct = () => {
  const [productName, setProductName] = useState("");
  const [amount, setAmount] = useState(1);
  const [productType, setProductType] = useState("fruits");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const productData = { productName, amount, productType };
    console.log(productData);
    alert(`Product: ${productName}, Amount: ${amount}, Type: ${productType}`);
    setProductName("");
    setAmount(1);
    setProductType("fruits");
  }; 
  
  return (
    <form onSubmit={handleFormSubmit}>
      
      <input type="text" value={productName} onChange={(e) => setProductName(e.target.value)} required />
      
      <input type="number" min="1" max="100" value={amount} onChange={(e) => setAmount(Number(e.target.value))} required />
      
      <select value={productType} onChange={(e) => setProductType(e.target.value)}>
        <option value="fruits">Fruits</option>
        <option value="vegetables">Vegetables</option>
      </select>
      
      <button type="submit">Add Product</button>
    </form>
  );
};

export default NewProduct;
