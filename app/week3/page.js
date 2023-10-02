import React from 'react';
import ItemList from './item-list';

const Page = () => {
  return (
    <main className="bg-pink-700 p-4">
      <h1 className="text-2xl font mb-4">Shopping List</h1>
      <ItemList />
    </main>
  );
};

export default Page;