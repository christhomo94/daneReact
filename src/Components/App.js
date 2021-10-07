import React, { useEffect, useState } from "react";
import CountButton from "./CountButton/CountButton";
import SearchBar from "./SearchBar/SearchBar";



const App = () => {

  const [productsState, setProductsState] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setProductsState([
        'Tooth Paste',
        'Tooth Brush',
        'Mouth Wash',
        'Dental Floss',
        'Mouth Guard'
      ])
    }, 2000)
  }, [])

  const hasProducts = productsState.length > 0;
  
  return (
    <div>
      {hasProducts ? <SearchBar products={productsState} /> : "Loading..." }
    </div>
  );
};

export default App;
