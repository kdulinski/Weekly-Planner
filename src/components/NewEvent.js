import "./NewEvent.css";

function NewEvent(props) {
  return (
    <div className="modal-background">
      <div className="modal">
        <h1>Add new event</h1>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" required onChange={props.onTitleChange} />
        <label htmlFor="description">Description:</label>
        <textarea
          rows={3}
          id="description"
          required
          onChange={props.onDescriptionChange}
        />
      </div>
    </div>
  );
}

export default NewEvent;
