import './search.css';
import React, { useState } from "react";

const Search = (props) => {
    const [searchInput, setSearchInput] = useState('');
    
    return (
      <div className="container">
        <input type="text" placeholder="Type to search.." className="search-input mr-1" onChange={(e) => setSearchInput(e.target.value)}/>
        <button onClick={() => props.handleSearch(searchInput)}>Search</button>
      </div >
    );
  }
  
  export default Search;