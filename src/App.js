import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';

function App() {
  const [mode,setMode] = useState('light')

  const toggleMode = () => {
    console.log("toggled")
    if(mode === "light"){
      setMode("dark");
      document.body.style.backgroundColor="#042743"
    }
    else{
      setMode("light");
      document.body.style.backgroundColor="white"
    }
  }
  return (
    <>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
    <div className='container my-3'>
      <TextForm heading="Enter the Text to analyze below"/>
    </div>
    
</>
  );
}

export default App;
