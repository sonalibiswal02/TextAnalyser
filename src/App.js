import "./App.css";
// import PropTypes from "prop-types";
// import ReactDOM from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/NavBar";
// import TextForm from "./components/TextForm";
import Form from "./components/Form";
import Warning from "./components/Warning";
// import About from "./components/About";
import React, { useState } from "react";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#1c262d";
      showAlert("Hello, its dark mode", "warning ");
      setTimeout(() => {
        document.title = "Dark mode ";
      }, 1000);
    } else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Hello, its light mode", "warning ");
      setTimeout(() => {
        document.title = "Text Analyser ";
      }, 300);
    }
  };

  // const pinkMode = () => {
  //   if (mode === "light") {
  //     setmode("pinkish");
  //     document.body.style.backgroundColor = "pink";
  //     showAlert("It's pink mode", "success");
  //   } else {
  //     setmode("light");
  //     document.body.style.backgroundColor = "white";
  //     showAlert("It is back to white! haha", "success ");
  //   }
  // };
  return (
    <>
      {/* <BrowserRouter> */}
      <Navbar title="TextAnalyser" mode={mode} toggleMode={toggleMode} />
      {/* <alert
        alert="You should check in on some of those
        fields below."
      /> */}
      <Warning alert={alert} />
      <div className="container my-3">
        {/* <Routes> */}
        {/* <Route
              index
              element={
                
              }  /> */}
        <Form heading="Enter the text here" mode={mode} showAlert={showAlert} />

        {/* <Route path="About" element={<About />} />
          </Routes> */}
      </div>
      {/* </BrowserRouter> */}
      {/* <Form heading="Enter the text here" mode={mode} showAlert={showAlert} /> */}

      {/* <div className="container"><About /></div> */}
    </>
  );
}

export default App;
