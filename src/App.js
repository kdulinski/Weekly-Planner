import Week from "./components/Week";
import Day from "./components/Day";
import Event from "./components/Event";
import AddButton from "./components/AddButton";
import NewEvent from "./components/NewEvent";
import { useState } from "react";

function App() {
  const [changedDescription, setChangedDescription] = useState("");
  const [changedTitle, setChangedTitle] = useState("");

  function titleChangeHandler(event) {
    setChangedTitle(event.target.value);
  }

  function descriptionChangeHandler(event) {
    setChangedDescription(event.target.value);
  }

  return (
    <div className="App">
      <NewEvent
        onTitleChange={titleChangeHandler}
        onDescriptionChange={descriptionChangeHandler}
      ></NewEvent>
      <Week>
        <Day dayName="monday">
          <Event title={changedTitle} description={changedDescription} />
          <Event
            title={"Event title"}
            description={"That's a event description."}
          />
          <AddButton />
        </Day>
        <Day dayName="tuesday"></Day>
        <Day dayName="wednesday"></Day>
        <Day dayName="thursday"></Day>
        <Day dayName="friday"></Day>
        <Day dayName="saturday"></Day>
        <Day dayName="sunday"></Day>
      </Week>
      {/* <div>
        <div class="header"><h1>Weekly Planner</h1></div>
        <div class="days">
            <div class="day">
                <h2>Monday</h2>
                <div class="event"> 
                    <h3>Title of event</h3>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati, iure?</p>
                </div>
            </div>
        </div>
    </div> */}
    </div>
  );
}

export default App;
