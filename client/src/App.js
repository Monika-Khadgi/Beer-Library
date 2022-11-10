import './App.css';
import './components/Navbar/Nav.css'

import Search from './components/search/search';
import DivContainer from './components/divContainer/divContainer';

import React, { useEffect, useState } from "react";

function App()  { 
  const [beers, setBeers] = useState();

  const fetchData = () => {
    return fetch("/api/")
          .then((response) => response.json())
          .then((data) => {
            setBeers(data)
    });
  }
  const randomBeer = () => {
    return fetch("/api/random/")
          .then((response) => response.json())
          .then((data) => {
            setBeers(data)
    });
  }
  const handleSearch = (beerName) => {
    return fetch(`/api/beers/${beerName}`)
          .then((response) => response.json())
          .then((data) => {
            setBeers(data)
    });
  }

  useEffect(() => {
    fetchData();
  },[])

  return (
    <main>
        <nav className="navigation">
          <div
            className="navigation-menu">
            <a href="/" className="brand-name">Beerpedia</a>
            <ul>
              <li>
              <Search handleSearch={handleSearch}/>
              </li>
              <li className='mr-0'>
              <button onClick={randomBeer}>Random</button>
              </li>
            </ul>
          </div>
        </nav>
      < DivContainer beers={beers} />
    </main>
  );
}

export default App;
