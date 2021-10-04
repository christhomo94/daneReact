import React, { useState } from "react";
import './SearchBar.css';

const SearchBar = () => {

    const [searchValue, setSearchValue] = useState('');
    const handleInputChange = (event) => {
        setSearchValue(event.target.value)
    }

    const handleClearClick = () => {
        setSearchValue('')

    }

    const displayButton = searchValue.length > 0

    console.log(displayButton)

    
    return (
    <div>
        <input type="text" value = {searchValue} onChange = {handleInputChange} />

        {displayButton && <button onClick={handleClearClick}>Clear</button> }

    </div>
    )   
    
};

export default SearchBar