import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [currentBook, setCurrentBook] = useState(0);

  useEffect(() => {
    fetch('/time').then(res => res.json()).then(data => {
      setCurrentBook(data.title);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>The first book is {currentBook}.</p>
      </header>
    </div>
  );
}

export default App;
