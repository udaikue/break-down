import React, { useState, useEffect } from 'react';

import axios from 'axios';

const breakdownDataUrl = 'http://localhost:3100/breakdown';

function App() {
  const [breakdownList, setBreakdownList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(breakdownDataUrl);
      setBreakdownList(response.data);
    };
    fetchData();
  }, []);

  type Breakdown = { id: number, category: string, cost: number, fixed: boolean };

  const notFixedBreakdownList = breakdownList.filter((breakdown: Breakdown) => {
    return !breakdown.fixed
  })

  return (
    <>
      <h1>2022年x月</h1>
      <input />円
      <select>
        {notFixedBreakdownList.map((breakdown: Breakdown) => (
          <option key={breakdown.id} value={breakdown.category}>
            {breakdown.category}
          </option>
        ))}
      </select>
      <button>追加</button>
      <ul>
        {breakdownList.map((breakdown: Breakdown) => (
          <li key={breakdown.id}>
            {breakdown.category}
            {breakdown.cost}円
          </li>
        ))}
      </ul>
      <button>リセット</button>
    </>
  );
}

export default App;
