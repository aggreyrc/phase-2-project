import React from 'react'

 function Search({handleSearch}) {
    return (
        <div className='search-bar'>
            <input 
            type="text" 
            placeholder="Search by author or title" 
            onChange={handleSearch}
            />
        </div>
    )
}

export default Search;
