import Week from "./components/Week";
import Day from "./components/Day";
import Event from "./components/Event";
import NewEvent from "./components/NewEvent";
import ModalBackground from "./components/ModalBackground";
import { useState } from "react";

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  function changeModalVisibility() {
    console.log("adsf");
    isModalVisible ? setIsModalVisible(false) : setIsModalVisible(true);
  }

  const [events, setEvents] = useState([]);

  function addEventHandler(postData) {
    setEvents((existingEvents) => [...existingEvents, postData]);
  }

  return (
    <div className="App">
      {isModalVisible && (
        <ModalBackground>
          <NewEvent
            onCancel={changeModalVisibility}
            onAddEvent={addEventHandler}
          />
        </ModalBackground>
      )}
      <Week>
        <Day dayName="monday" onButtonClick={changeModalVisibility}>
          {events.map((event) => (
            <Event title={event.title} description={event.description} />
          ))}
        </Day>
        <Day dayName="tuesday" onButtonClick={changeModalVisibility}></Day>
        <Day dayName="wednesday" onButtonClick={changeModalVisibility}></Day>
        <Day dayName="thursday" onButtonClick={changeModalVisibility}></Day>
        <Day dayName="friday" onButtonClick={changeModalVisibility}></Day>
        <Day dayName="saturday" onButtonClick={changeModalVisibility}></Day>
        <Day dayName="sunday" onButtonClick={changeModalVisibility}></Day>
      </Week>
    </div>
  );
}

export default App;
