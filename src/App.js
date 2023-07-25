import Week from "./components/Week";
import Day from "./components/Day";
import Event from "./components/Event";
import AddButton from "./components/AddButton";

function App() {
  return (
    <div className="App">
      <Week>
        <Day dayName="monday">
          <Event />
          <Event />
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
