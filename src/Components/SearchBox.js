import React from 'react';

const SearchBox = ( {searchfiled, onSearchChange}) => {
    return (
        <div className = 'pa2'>
            <input
                className= 'pa3 ba b--green bg-lightest-blue'
                type= 'search'
                placeholder= 'search your professor'
                onChange= {onSearchChange}
            />
        </div>
    );
}

export default SearchBox;