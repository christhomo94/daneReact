import React, { useState, useEffect } from "react";
import reactDom from "react-dom";
import './CountButton.css';

const CountButton = (props) => {
  const [currentCount, setCurrentCount] = useState(0);

  const handleClick = () => {
    setCurrentCount(currentCount + props.incrementBy);
  };
 
  const buttonStyles = {
    backgroundColor: props.buttonColor
  }

  useEffect(() => {
    if (currentCount === 50){
      alert("You are at 10")
    }
  }, [currentCount ]);

  return (
    <div>
      <button style={buttonStyles}onClick={handleClick}>+{props.incrementBy}</button>
      <div className ='count-display'> {currentCount}</div>
    </div>
  );
};


export default CountButton;
