import React, { useState } from 'react';

export default function TextForm(props) {
    const handleUpClick = () => {
        console.log("Uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success");
    };

    const handleLoClick = () => {
        console.log("Lowercase was clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success");
    };

    const handleClearClick = () => {
        let newText = '';
        setText(newText);
        props.showAlert("All the text has been cleared","success");
    };

    const handleOnChange = (event) => {
        console.log("On change");
        setText(event.target.value);
      
    };
    const handleCopy=()=>{
        console.log("I am copy");
        var text=document.getElementById("myBox");
        text.select();
        text.setSelectionRange(0,9999);
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard","success");

    }

    const handleExtraSpaces = () => { 
        let newText = text.split(/[ ]+/);
         setText(newText.join(" ")); 
         props.showAlert("Extra spaces have been removed", "success"); 
        };

    
    const [text, setText] = useState('Enter the text here');

    const mystyle = {
        color: props.mode === 'dark' ? 'white' : 'black',
        backgroundColor: props.mode === 'dark' ? 'black' : 'white'
    };

    return (
        <>
            <div div className="container" style={mystyle}> </div>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.mode === 'dark' ? 'grey' : '#ddc8c8' }} id="myBox" rows="8"></textarea>
                    
                
                <button className="btn btn-primary my-2" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy</button>
                <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove spaces</button>

                </div>
           
            
                <div className="container my-3" style={mystyle}> 
                    <h1>Your text summary</h1> 
                    <p>{text.split(/\s+/).filter((element) => element.trim().length !== 0).length} words and {text.length} characters</p> 
                    <p>{0.08 * text.split(/\s+/).filter((element) => element.trim().length !== 0).length} Minutes read</p>
                     <h2>Preview</h2>
                      <p>{text}</p> 
                      </div>
            
           
        </>
    );
}
