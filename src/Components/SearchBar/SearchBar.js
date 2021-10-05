import React, { useState } from "react";
import './SearchBar.css';

const products = [
    'Tooth Paste',
    'Tooth Brush',
    'Mouth Wash',
    'Dental Floss',
    'Mouth Guard'
];

const SearchBar = () => {

    const [searchValue, setSearchValue] = useState('');
    const handleInputChange = (event) => {
        setSearchValue(event.target.value)
    };

    const handleClearClick = () => {
        setSearchValue('')
    };

    const displayButton = searchValue.length > 0;

    const filteredProducts = products.filter((product) => {
        return product.includes(searchValue);
    })
    
    return (
    <div>
        <input type="text" value = {searchValue} onChange = {handleInputChange} />
        {displayButton && <button onClick={handleClearClick}>Clear</button>}

        <ul>
        {filteredProducts.map((product) => {
                return <li key={product}> {product} </li> 
            })}
        </ul>   
    </div>
    )       
};

export default SearchBar