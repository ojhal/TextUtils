import React, { useState } from 'react'

export default function TextForm(props) {
    const[text,setText] = useState("enter text here")

   const handleUpClick = () => {
    setText(text.toUpperCase())
    }
    const handleOnChange = (e) => {
        setText(e.target.value)
    }
  return (
<div>
    <h1>{props.heading}</h1>
          <div className="mb-3">
              <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
              <br/>
              <button className='btn btn-primary' onClick={handleUpClick}>Convert to uppercase</button>
          </div>
    </div>
)
}
