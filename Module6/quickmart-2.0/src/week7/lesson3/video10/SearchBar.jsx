import './SearchBar.css'
function SearchBar({setSearchTerm}) {
  return (
    <div className="SearchBar">
      <input
        type="text"
        placeholder="Search products..."
        onChange={(e) => {
          const userInput = e.target.value;
          console.log(userInput); 
          setSearchTerm(userInput);
          }}>
      </input>
    </div>
  );
}

export default SearchBar;
