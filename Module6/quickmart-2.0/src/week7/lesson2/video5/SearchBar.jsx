import './SearchBar.css'
function SearchBar() {

  function handleChange(event) {
  // React SyntheticEvent is automatically passed to this function
    console.log("Full SyntheticEvent object:");
    console.log(event);            // Logs the entire SyntheticEvent
    console.log("Value entered:");
    console.log(event.target.value); // Logs the current input value
    console.log("Input DOM element:");
    console.log(event.target);     // Logs the DOM element (input)
    console.log("Event type:");
    console.log(event.type);       // Logs 'change'
    console.log("Accessing native event:");
    console.log(event.nativeEvent); // Logs the actual browser event
  }

  return (
    <div className="SearchBar">
      <input
        type="text"
        placeholder="Search products..."
        //onChange={(e) => console.log(e.target.value)}
        onChange={handleChange}>
      </input>
    </div>
  );
}

export default SearchBar;
