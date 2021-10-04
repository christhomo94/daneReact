import React, { useState } from "react";
import './SearchBar.css';

const SearchBar = () => {

    const [searchValue, setSearchValue] = useState('Chris');
    const handleInputChange = (event) => {
        setSearchValue(event.target.value)
    }

    
    return (
    <div>
        <input type="text" value = {searchValue} onChange = {handleInputChange}  />
    </div>
    )   
    
};

export default SearchBar