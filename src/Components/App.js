import React from "react";
import CountButton from "./CountButton";

const App = () => {
  return (
    <div>
      <CountButton incrementBy={1} buttonColor={'blue'} borderRadius = {'10px'} />
      <CountButton incrementBy={5} buttonColor={'red'} borderRadius = {'3px'}/>
      <CountButton incrementBy={10} buttonColor={'green'} borerRadius = {'20px'}/>
    </div>
  );
};

export default App;
