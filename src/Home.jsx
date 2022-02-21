import React, { useState } from 'react';
import './style.css';
import { useParams, Redirect } from 'react-router-dom';

export default function Home() {
  const [text, setText] = useState('');
  const handlesubmit = (e) => {
    e.preventDefault();
    setText(e.target.value);
    console.log(text);
    window.location.href = `https://react-b9fbmr.stackblitz.io/search`;
  };
  return (
    <div>
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
