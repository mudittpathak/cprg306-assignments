const Page = () => {
  const [selectedItemName, setSelectedItemName] = useState("");

  const handleItemSelect = (itemName) => {
      const cleanedItemName = itemName.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]| [ - ]| [ - ]|[\u2011-\u26FF]| [ - ])/g, '').split(',')[0].trim();
      setSelectedItemName(cleanedItemName);
  };

  return (
      <main className="bg-black-100 p-4 flex">
          <div>
          const Page = () => {
            const [items, setItems] = useState(itemsData);

            const handleAddItem = (item) => {
              setItems([...items, item]);
            };

            return (
              <main className="bg-black-100 p-4">
                <h1 className="text-2xl font-bold mb-4 text-red-600 flex-auto items-centre">Shopping List</h1>
                <NewItem onAddItem={handleAddItem} />
                <ItemList items={items} />
              </main>
            );
          };

                        <ItemList items={items} onItemSelect={handleItemSelect} />
          </div>
          <MealIdeas ingredient={selectedItemName} />
      </main>
  );
};

export default Page;