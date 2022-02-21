import React, { useState, useEffect } from 'react';
import './style.css';
import Home from './Home';

export default function Query() {
  const [text, setText] = useState('');
  const handlesubmit = (e) => {
    e.preventDefault();
    setText(e.target.value);
    console.log(text);
    window.location.href = `https://react-b9fbmr.stackblitz.io/search?q=${text}`;
  };

  return (
    <div>
      <h1>This is query page</h1>
      <h1>LOGO</h1>
      <form action="" type="submit" onSubmit={handlesubmit}>
        <input
          className="search-box"
          type="text"
          placeholder="search your query"
          onChange={(e) => {
            setText(e.target.value);
            console.log(text);
          }}
        />
      </form>
    </div>
  );
}
