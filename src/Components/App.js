import React from "react";
import CountButton from "./CountButton/CountButton";
import SearchBar from "./SearchBar/SearchBar";



const App = () => {
  return (
    <div>
      <SearchBar products={[
  'Tooth Paste',
  'Tooth Brush',
  'Mouth Wash',
  'Dental Floss',
  'Mouth Guard'
]} />

<SearchBar products={[
  'Bike Rack',
  'Mountain Bike',
  'Soccer Ball',
  'Tennis Racquet',
  'Rugby Ball'
]} />
    </div>
  );
};

export default App;
