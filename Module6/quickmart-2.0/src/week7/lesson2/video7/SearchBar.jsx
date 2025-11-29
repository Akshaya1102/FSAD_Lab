import './SearchBar.css'
function SearchBar() {
  return (
    <div className="SearchBar">
      <input
        type="text"
        placeholder="Search products..."
        onChange={(e) => console.log(e.target.value)}>
      </input>
    </div>
  );
}

export default SearchBar;
