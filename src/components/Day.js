import "./Day.css";
import AddButton from "./AddButton";
import { useState } from "react";

function Day(props) {
  const [isAddButtonVisible, setIsAddButtonVisible] = useState(false);

  function mouseOverHandler() {
    setIsAddButtonVisible(true);
  }
  function mouseOutHandler() {
    setIsAddButtonVisible(false);
  }

  return (
    <div
      className="day"
      onMouseOver={mouseOverHandler}
      onMouseOut={mouseOutHandler}
    >
      <h2>{props.dayName}</h2>
      {props.children}
      {isAddButtonVisible && <AddButton onButtonClick={props.onButtonClick} />}
    </div>
  );
}

export default Day;
