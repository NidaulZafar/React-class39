import './App.css';
import React from 'react';
import { useState, useEffect } from 'react';

function App() {
  const [person, setPerson] = useState(null);
  const getPerson = async () => {
    const fetchPerson = await fetch('https://www.randomuser.me/api?results=1');
    const result = await fetchPerson.json();
    setPerson(() => result);
  }
  useEffect(() => {
    getPerson();  
  }, []);
  return (
    <div className="App">
      <ul>
        {Object.keys(person)}
      </ul>
    </div>
  );
}

export default App;
