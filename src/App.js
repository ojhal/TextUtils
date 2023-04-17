import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';
// import About from './Components/About';
// import {
//   BrowserRouter,
//   Switch,
//   Route,
//   Routes
// } from "react-router-dom"

function App() {
  const [mode, setMode] = useState('light')

  const toggleMode = () => {
    console.log("toggled")
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743"
    }
    else {
      setMode("light");
      document.body.style.backgroundColor = "white"
    }
  }
  return (
    <>
      {/* <BrowserRouter> */}
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      <div className='container my-3'>
      {/* <Routes> */}
        {/* <Route exact path="/" element={<About />} /> */}
        {/* <Route exact path="home/*" element={ */}
        <TextForm mode={mode} heading="enter the text below"/>
        {/* // } /> */}
      {/* </Routes> */}
      </div>
    {/* </BrowserRouter> */}
    </>
  );
}

export default App;
