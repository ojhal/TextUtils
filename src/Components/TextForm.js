import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("")

    const handleUpClick = () => {
        setText(text.toUpperCase())
    }
    const handleLowClick = () => {
        setText(text.toLowerCase())
    }
    const handleOnChange = (e) => {
        console.log(e)
        setText(e.target.value)
    }
    const handleExtraSpaces= () => {
        let newText  = text.split(/[ ]+/);
        setText(newText.join(" "))
    }
    return (
        <>
            <div className='container' style={{color:props.mode==="dark"?"white":"#042743"}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==="dark"?"grey":"white", color:props.mode==="dark"?"white":"black"}} id="myBox" rows="8"></textarea>
                    <br />
                    <button className='btn btn-primary' onClick={handleUpClick}>Convert to uppercase</button>
                    <button className='btn btn-primary mx-3' onClick={handleLowClick}>Convert to lowercase</button>
                    <button className='btn btn-primary mx-3' onClick={handleExtraSpaces}>Remove extra spaces</button>

                </div>
            </div>
            <div className='container my-3'  style={{color:props.mode==="dark"?"white":"#042743"}}>
                <h1>
                    Your Text Summary
                </h1>
                <p>
                    {text.split(" ").length}  words and {text.length} characters
                </p>
                <p>{0.008*text.split(" ").length} Minuts read</p>
                <h2>Preview</h2>
                <p>{text}</p>
            </div>
        </>
    )
}
