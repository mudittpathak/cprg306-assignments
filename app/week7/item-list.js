const ItemList = ({ items, onItemSelect }) => {
  const ItemList = ({ items }) => {
    const [sortBy, setSortBy] = useState("name");
  
    const sortedItems = [...itemsData].sort((a, b) => {
      if (sortBy === "name") return a.name.localeCompare(b.name);
      if (sortBy === "category") return a.category.localeCompare(b.category);
    });
  return (
          <div>
              const ItemList = ({ items }) => {
      const [sortBy, setSortBy] = useState("name");

      const sortedItems = [...itemsData].sort((a, b) => {
        if (sortBy === "name") return a.name.localeCompare(b.name);
        if (sortBy === "category") return a.category.localeCompare(b.category);
      });
              <ul>
                  {sortedItems.map(item => (
                      <Item key={item.id} {...item} onSelect={onItemSelect} />
                  ))}
              </ul>
          </div>
      );
    };

export default ItemList;
