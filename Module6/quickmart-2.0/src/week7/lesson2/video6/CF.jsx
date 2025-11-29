import React, { useState, useRef } from 'react';

function CF() {
  // Controlled input state
  const [controlledInput, setControlledInput] = useState('');

  // Uncontrolled input reference
  const uncontrolledInputRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    alert(
      `Controlled Value: ${controlledInput}\nUncontrolled Value: ${uncontrolledInputRef.current.value}`
    );
  }

  return (
    <div style={{ display: 'flex', gap: '40px', padding: '20px' }}>
      {/* Controlled Component */}
      <div style={{ flex: 1 }}>
        <h3>Controlled Component</h3>
        <input
          type="text"
          value={controlledInput}
          onChange={(e) => setControlledInput(e.target.value)}
          placeholder="Controlled Input"
        />
        <p>Current Value: {controlledInput}</p>
      </div>

      {/* Uncontrolled Component */}
      <div style={{ flex: 1 }}>
        <h3>Uncontrolled Component</h3>
        <input
          type="text"
          ref={uncontrolledInputRef}
          placeholder="Uncontrolled Input"
        />
        <p>Value only read on submit</p>
      </div>

      {/* Submit Button */}
      <div style={{ flexBasis: '100%' }}>
        <button onClick={handleSubmit}>Show Values</button>
      </div>
    </div>
  );
}

export default CF;
