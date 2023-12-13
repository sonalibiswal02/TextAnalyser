import React, { useState } from "react";
// import PropTypes from "prop-types";

export default function Form(props) {
  const [text, setText] = useState("");
  const handleUpClick = (event) => {
    console.log("onchange was activated");
    setText(event.target.value);
  };

  const fire = () => {
    console.log("button was pressed.");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("It was converted to uppercase", "success ");
  };

  const fireLower = () => {
    console.log("button was pressed.");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("It was converted to lowercase", "success ");
  };

  const clearr = () => {
    console.log("button was pressed.");
    let newText = "";
    setText(newText);
    props.showAlert("Text was copied.", "success ");
  };

  return (
    <>
      <div>
        <div
          className="mb-3"
          style={{
            color: props.mode === "dark" ? "white" : "black",
          }}
        >
          <h1>{props.heading}</h1>

          <textarea
            className="form-control"
            id="textBox"
            value={text}
            onChange={handleUpClick}
            rows="3"
            style={{
              backgroundColor: props.mode === "dark" ? "#222f38" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={fire}>
          Convert To Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={fireLower}>
          Convert To Lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={clearr}>
          Clear Text
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1>Your text summary</h1>
        <p>
          {text.split("").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : "wRITE wHATeVER yOU WANT!"}</p>
      </div>
    </>
  );
}
