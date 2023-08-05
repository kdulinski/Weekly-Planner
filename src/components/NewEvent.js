import { useState } from "react";
import "./NewEvent.css";

function NewEvent(props) {
  const [changedDescription, setChangedDescription] = useState("");
  const [changedTitle, setChangedTitle] = useState("");

  function titleChangeHandler(event) {
    setChangedTitle(event.target.value);
  }

  function descriptionChangeHandler(event) {
    setChangedDescription(event.target.value);
  }

  function submitHandler(event) {
    event.preventDefault();
    const postData = {
      key: props.keyValue,
      day: props.day,
      title: changedTitle,
      description: changedDescription,
    };

    props.onAddEvent(postData);
    props.onCancel();
  }

  return (
    <form className="new-event" onSubmit={submitHandler}>
      <h1>Add new event</h1>
      <label htmlFor="title">Title:</label>
      <input type="text" id="title" required onChange={titleChangeHandler} />
      <label htmlFor="description">Description:</label>
      <textarea
        rows={3}
        id="description"
        required
        onChange={descriptionChangeHandler}
      />
      <div className="actions">
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button>Submit</button>
      </div>
    </form>
  );
}

export default NewEvent;
