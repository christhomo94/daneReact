import React from "react";
import CountButton from "./CountButton/CountButton";

const App = () => {
  return (
    <div>
      <CountButton incrementBy={1} buttonColor={'blue'}/>
      <CountButton incrementBy={5} buttonColor={'red'}/>
      <CountButton incrementBy={10} buttonColor={'green'}/>
    </div>
  );
};

export default App;
