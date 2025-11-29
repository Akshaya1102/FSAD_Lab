import './Login.css';
function Signup() {
  return (
    <form className="LoginForm">
      <div className="FormGroup">
        <label>Name:</label>
        <input type="text" placeholder="Your Name" />
      </div>
      <div className="FormGroup">
        <label>Email:</label>
        <input type="text" placeholder="Your Email" />
      </div>
      <div className="FormGroup">
        <label>Password:</label>
        <input type="password" placeholder="Create Password" />
      </div>
      <button type="submit">Signup</button>
    </form>
  );
}

export default Signup;
