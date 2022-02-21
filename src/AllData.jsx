import React, { useState, useEffect } from 'react';
import './style.css';
import Home from './Home';

export default function AllData() {
  const [alldata, setAlldata] = useState([]);

  useEffect(async () => {
    await fun1();
  }, []);

  const fun1 = async () => {
    const res = await fetch('https://fast-reef-22226.herokuapp.com/data');
    const data = await res.json();
    setAlldata(data);
  };
  const sort_alphabetically = () => {
    console.log('Hi');
    const f = alldata.sort((a, b) => a.title - b.title);
    setAlldata(alldata);
    console.log(alldata);
  };
  const sort_alphabetically_desc = () => {
    console.log('Hi');
    const f = alldata.sort((a, b) => b.title - a.title);
    setAlldata(alldata);
    console.log(alldata);
  };
  const sort_by_date = () => {
    console.log('Hi');
    const f = alldata.sort((a, b) => a.creation_date - b.creation_date);
    setAlldata(alldata);
    console.log(alldata);
  };
  const sort_by_date_desc = () => {
    console.log('Hi');
    const f = alldata.sort((a, b) => b.creation_date - a.creation_date);
    setAlldata(alldata);
    console.log(alldata);
  };
  const sort_by_quality = () => {
    console.log('Hi');
    const f = alldata.sort((a, b) => a.quality - b.quality);
    setAlldata(alldata);
    console.log(alldata);
  };
  const sort_by_quality_desc = () => {
    console.log('Hi');
    const f = alldata.sort((a, b) => b.quality - a.quality);
    setAlldata(alldata);
    console.log(alldata);
  };

  const filterExplicit = () => {
    const f = alldata.filter((a) => {
      a.explicit == true;
    });
    console.log(f);
    setAlldata(f);
  };

  return (
    <div>
      <Home />
      <button onClick={() => sort_alphabetically()}>Sort A-Z</button>
      <button onClick={() => sort_alphabetically_desc()}>Sort Z-A</button>
      <button onClick={() => sort_by_date()}>Sort By date (ASC)</button>
      <button onClick={() => sort_by_date_desc()}>Sort By Date (DESC)</button>
      <button onClick={() => sort_by_quality()}>Sort By Quality (ASC)</button>
      <button onClick={() => sort_by_quality_desc()}>
        Sort By Quality(desc)
      </button>
      <button onClick={() => filterExplicit()}>Filter Explicit</button>

      {alldata.map((item, index) => {
        return (
          <div key={index}>
            <p>{item.url}</p>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
              }}
            >
              <p>
                <a href={item.url}>{item.title}</a> ||
              </p>

              <p>{item.author}</p>
            </div>
            <p>{item.description}</p>
            <p>Creation Date :{item.creation_date} </p>
            <h5>
              Explicit: {item.explicit ? 'YES' : 'NO'} || Quality% :
              {item.quality}
            </h5>
            <hr />
          </div>
        );
      })}
    </div>
  );
}
