import React from 'react';
import { Suspense } from 'react';
import './App.css'
const Chart = React.lazy(() => import('./Chart'));


function App() {
  return (
    <div className="App">
      <h2>Welcome, this is a Component in React</h2>
      <Suspense fallback={<div>Loading...</div>}>
        <Chart />
      </Suspense>
    </div>

  )
}

export default App
