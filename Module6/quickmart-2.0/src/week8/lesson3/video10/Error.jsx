import React from 'react'
import { useLocation } from "react-router-dom";

function Error() {
  const location = useLocation();
  return (
    <div className='Error'>
      <h1>404 - Page Not Found</h1>
      <p>No match for <code>{location.pathname}</code></p>
    </div>
  )
}

export default Error