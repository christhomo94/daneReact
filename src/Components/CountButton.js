import React, { useState } from "react";
import reactDom from "react-dom";

const CountButton = (props) => {
  const [currentCount, setCurrentCount] = useState(0);

  const handleClick = () => {
    setCurrentCount(currentCount + props.incrementBy);
  };
 
  const buttonStyles = {
    borderRadius: props.borderRadius,
    backgroundColor: props.buttonColor
  }

  return (
    <div>
      <button style={buttonStyles}onClick={handleClick}>+{props.incrementBy}</button>
      <div>{currentCount}</div>
    </div>
  );
};


export default CountButton;
