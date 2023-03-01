import React, { useState } from 'react'

export const TextForm = (prop) => {
  
  

  const handleCopy = () => {
    var text = document.getElementById('myBox');
    text.select();
    text.setSelectionRange(0,9999);
    navigator.clipboard.writeText(text.value);
    prop.showAlert("copied to clipboard !", "success");
  }

  const handleUpClick = () => {
    // console.log("upperCase Was Clicked" + text);
    let newText = text.toUpperCase();
    setText(newText)
    prop.showAlert("converted to uppercase !", "success");
  }

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText)
    prop.showAlert("converted to lowercase !", "success");
  }

  const handleExtraSpaces = () => {
   let newText= text.split(/[ ]+/);
    setText(newText.join(" "))
    prop.showAlert("extra spaces removed !", "success");
  }

  const handleOnChange = (event) => {
    // console.log("on Chnage");
    setText(event.target.value);
  }

  const [text, setText] = useState("");


  return (
    <>
    
    <div className= "conatainer" style={{color:prop.mode==='dark'?'white':'#042743' }}>
      <h1>{prop.heading}</h1>
      <div className="mb-3">
        <textarea id="myBox" className="form-control" openClick={prop.mode} closeClick={prop.mode} onChange={handleOnChange} value={text} style={{backgroundColor:prop.mode ==='dark'?'#dee2e6':'#dee2e6', color:prop.mode==='dark'?'black':'black'}} rows="8" ></textarea>
      </div>
      <button className="btn btn-dark"      onClick={handleUpClick}>Convert To Uppercase</button>
      <button className="btn btn-dark mx-2" onClick={handleLoClick}>Convert To Lowercase</button>
      <button className="btn btn-dark mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
      <button className="btn btn-dark mx-2" onClick={handleCopy}>CopyText</button>

      </div>
      <div className="container my-3" style={{color:prop.mode==='dark'?'white':'#042743'}}>
      <h2> Your Text Summary</h2>
      <p>{ text.length>0 ? text.trim().split(/[ ]+/).length : 0} Words and {text.length} Characters</p>
      <p>{0.008 * text.split().length} Minutes Read</p>
      <h2>Preview</h2>
      <p>{text.length >0 ? text : "Enter something in the textbox above to preview it here" }</p>
      </div>
        </>
  );
}

export default TextForm;