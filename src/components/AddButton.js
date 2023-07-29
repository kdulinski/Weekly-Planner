import "./AddButton.css";

function AddButton(props) {
  return <div className="add-button" onClick={props.onButtonClick}></div>;
}

export default AddButton;
