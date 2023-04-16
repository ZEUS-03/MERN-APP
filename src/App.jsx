
import React, { useState } from 'react'
import { ReactDOM } from 'react'
const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>wanderer.com</h1>
      <ul>
        <li>All users</li>
        <li>My Places</li>
        <li>Add Place</li>
        <li>Authenticate</li>
      </ul>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)