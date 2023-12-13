import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here!");

  const handleUpClick = () => {
    console.log("on clicking the uppercase");
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleOnChange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };

  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        {props.text}

        <textarea
          className="form-control"
          id="textBox"
          value={text}
          onChange={handleOnChange}
          rows="12"
        ></textarea>
      </div>

      <button className="btn btn-primary" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
    </div>
  );
}
