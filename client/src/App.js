import { useEffect, useState } from 'react';
import './App.css';
import Table from './Table';
import axios from "axios";


function App() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
const fetchUsers = async () => {
  const res = await axios.get(`http://localhost:5001?q=${query}`);
  setData(res.data);
}
fetchUsers();
  }, [query]);

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search..."
        className="search"
        onChange={(e) => setQuery(e.target.value)}
      />
      <Table data={data} />
    </div>
  );
}

export default App;
