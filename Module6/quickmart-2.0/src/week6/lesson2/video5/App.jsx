import './App.css'

function App() {
  
  // String
  let lessonName = "JSX and Component Creation";
  // Number
  const weeks = 10;
  // Boolean
  const isReact = false;                              
  // Array 
  const webTechnologies  = ["html", "css", "js"];
  // Object
  const courseDetails = { 
    title: "Frontend Development",
    enrolled: 100
  };    
  // Function
  const greet = () => "Welcome to React!";


  return (
    <div className="App">
      <h2>Welcome, this is a Component in React</h2>
      <h3>{lessonName}</h3>
      <p><strong>Weeks:</strong> {weeks} weeks</p>
      <p><strong>isReact:</strong> {isReact? "Yes" : "No"}</p>
      <h3>Course Details:</h3>
      <p><strong>Title:</strong> {courseDetails.title}</p>
      <p><strong>Enrolled:</strong> {courseDetails.enrolled}</p>
      <h3>Course Topics:</h3>
      {<p>{webTechnologies}</p>}
      <ul>
        {webTechnologies.map((technology, idx) => (
          <li key={idx}>{technology}</li>
        ))}
      </ul>
      <h3>{greet()}</h3>

    </div>
    
  )
}

export default App
