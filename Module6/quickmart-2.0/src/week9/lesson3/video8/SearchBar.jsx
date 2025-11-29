import { useSearchParams } from "react-router-dom";

import './SearchBar.css'

function SearchBar() {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <div className="SearchBar">
      <input
        type="text"
        placeholder="Search products..."
        onChange={(e) => {
          const userInput = e.target.value;
          console.log(userInput); 
          setSearchParams({ search: userInput, page: 1 });
          }}>
      </input>
    </div>
  );
}

export default SearchBar;
