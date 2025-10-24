import React, { useEffect, useState } from "react";
function UserProfile({ user = { name: "Guest", age: 0 }, showAge = true }) {
  const [greeting, setGreeting] = useState("");
  useEffect(() => {
    setGreeting(`Welcome, ${user.name}!`);
  }, [user.name]);   
  return (
    <div>
      <h2>{greeting}</h2>
      {showAge && <p>Age: {user.age}</p>}
    </div>
  );
}
export default UserProfile;
