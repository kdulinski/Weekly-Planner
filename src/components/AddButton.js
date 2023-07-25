import "./AddButton.css";

function AddButton() {
  function clickHandler() {
    alert("Button was clicked!");
  }

  return <div className="add-button" onClick={clickHandler}></div>;
}

export default AddButton;
