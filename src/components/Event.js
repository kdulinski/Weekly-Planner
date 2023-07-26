import "./Event.css";

function Event(props) {
  return (
    <div className="event">
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}

export default Event;
