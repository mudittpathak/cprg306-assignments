import React from 'react';

const Item = ({ name, category, quantity }) => {
  return (
    <li className="bg-green-400 p-2 rounded-md mb-2">
      <span className="font-bold">{name}</span> 
      <span className="text-xs text-green-700">{category}</span>
      <span className="text-sm text-green-500">({quantity})</span>
    </li>
  );
};

export default Item;