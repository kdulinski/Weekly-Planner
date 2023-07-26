import "./Day.css";
import { useState } from "react";

function Day(props) {
  return (
    <div className="day">
      <h2>{props.dayName}</h2>
      {props.children}
    </div>
  );
}

export default Day;
