import { useState } from 'react';
import './App.css';
import {Users} from "./users";

function App() {
  const [query, setQuery] = useState("");

  console.log(query)
  return (
    <div className="App">
      <input type="text" placeholder="Search..." className="search" onChange={e => setQuery(e.target.value)} />
      <ul className="list">
        {Users.map((user, key) => (
          <li key={user.id} className="listItem">{user.first_name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
