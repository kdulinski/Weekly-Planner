import "./Day.css";
import AddButton from "./AddButton";
import Event from "./Event";
import { useState } from "react";

function Day(props) {
  const [isAddButtonVisible, setIsAddButtonVisible] = useState(false);

  function mouseOverHandler() {
    setIsAddButtonVisible(true);
    props.pullData(props.dayName);
  }

  function mouseOutHandler() {
    setIsAddButtonVisible(false);
  }

  function eventsFilter(event) {
    if (event.day == props.dayName) {
      return (
        <Event
          key={event.key}
          title={event.title}
          description={event.description}
        ></Event>
      );
    }
  }

  return (
    <div
      className="day"
      onMouseOver={mouseOverHandler}
      onMouseOut={mouseOutHandler}
    >
      <h2>{props.dayName}</h2>
      {props.events.map(eventsFilter)}
      {isAddButtonVisible && <AddButton onButtonClick={props.onButtonClick} />}
    </div>
  );
}

export default Day;
