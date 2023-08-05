import Week from "./components/Week";
import Day from "./components/Day";
import NewEvent from "./components/NewEvent";
import ModalBackground from "./components/ModalBackground";
import { useState, useEffect } from "react";

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [pulledDayName, setPulledDayName] = useState("");
  const [events, setEvents] = useState([]);

  function changeModalVisibility() {
    isModalVisible ? setIsModalVisible(false) : setIsModalVisible(true);
  }

  // useEffect(() => {
  //   async function fetchEvents() {
  //     const response = await fetch("http://localhost:8080/posts");
  //     const resData = await response.json();
  //     setEvents(resData.posts);
  //   }

  //   fetchEvents();
  // }, []);

  function addEventHandler(postData) {
    // fetch("http://localhost:8080/posts", {
    //   method: "POST",
    //   body: JSON.stringify(postData),
    //   headers: { "Content-Type": "application/json" },
    // });

    setEvents((existingEvents) => [...existingEvents, postData]);
  }

  function pullData(data) {
    setPulledDayName(data);
  }

  return (
    <div className="App">
      {isModalVisible && (
        <ModalBackground>
          <NewEvent
            onCancel={changeModalVisibility}
            onAddEvent={addEventHandler}
            day={pulledDayName}
            keyValue={events.length}
          />
        </ModalBackground>
      )}
      <Week>
        <Day
          dayName="monday"
          onButtonClick={changeModalVisibility}
          pullData={pullData}
          events={events}
        ></Day>
        <Day
          dayName="tuesday"
          onButtonClick={changeModalVisibility}
          pullData={pullData}
          events={events}
        ></Day>
        <Day
          dayName="wednesday"
          onButtonClick={changeModalVisibility}
          pullData={pullData}
          events={events}
        ></Day>
        <Day
          dayName="thursday"
          onButtonClick={changeModalVisibility}
          pullData={pullData}
          events={events}
        ></Day>
        <Day
          dayName="friday"
          onButtonClick={changeModalVisibility}
          pullData={pullData}
          events={events}
        ></Day>
        <Day
          dayName="saturday"
          onButtonClick={changeModalVisibility}
          pullData={pullData}
          events={events}
        ></Day>
        <Day
          dayName="sunday"
          onButtonClick={changeModalVisibility}
          pullData={pullData}
          events={events}
        ></Day>
      </Week>
    </div>
  );
}

export default App;
