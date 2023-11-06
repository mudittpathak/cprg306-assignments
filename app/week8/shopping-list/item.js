const Item = ({ name, quantity, category, onSelect }) => {
  return (
      <li className="bg-green-400 p-2 rounded-md mb-2" 
          onClick={() => { if(onSelect) onSelect(name) }}>
        
        <span className="font-bold">{name}</span>   
        </li>