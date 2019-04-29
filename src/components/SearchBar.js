import React from 'react';

const SearchBar = ({onChange}) => {


  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input type="radio" value="Alphabetically" onChange={(e) => onChange(e)}/>
        Alphabetically
      </label>
      <label>
        <input type="radio" value="Price" onChange={(e) => onChange(e)}/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select onChange={(e) => onChange(e)}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>


    </div>
  );
}


export default SearchBar;
