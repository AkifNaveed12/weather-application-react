import React from 'react';

const Search = ({ search, setSearch, handleSearch}) => {
    return (
        <div className='search-engine'>
            <input type="text" 
            className='city-search'
            placeholder='Enter the City'
            name='search'
            value={search}
            onChange={(event) => setSearch(event.target.value)}/>

            <button
            className='search-btn' 
            onClick={handleSearch}>Search</button>
        </div>
    );
}

export default Search;
