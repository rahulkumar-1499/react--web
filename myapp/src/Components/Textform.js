import React,{useState} from 'react'

export default function Textform(props) {
  
  const handleTextChangeUp=()=>{
    // console.log("upper case was clicked"+text);
    let newtext=text.toUpperCase();
    setText(newtext)
    props.showAlert("upper case done","successfully ")
  }
  const handleTextChangeDown=()=>{
    // console.log("upper case was clicked"+text);
    let newtext=text.toLowerCase();
    setText(newtext)
    props.showAlert("lower case done","successfully ")

  }
  const getClear=()=>{
    // console.log("upper case was clicked"+text);
    let newtext=" ";
    setText(newtext)
    props.showAlert("clear done","successfully ")

    
  }

  const handleonChange=(event)=>
  { 
    // console.log("on chanege");
    setText(event.target.value)
  }
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  }

  const getnumber=()=>{
    let numberPattern = /\d+/g;
    let newtext=text.match(numberPattern);
    let res = newtext.join("");
    setText(res)
  }
  function getWordCount(str) {
    
    return str.trim().split(/\s+/).length;
}

      //text is state and seText is function to change the state

  const[text, setText]=useState(" ");  //default text     usestate is hook
  // text="rahul";     //not allow to alter text like this
  return (
    <>
    <div className='container' style={{color:props.mode==="dark"?"white":"black"}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleonChange} style={{backgroundColor:props.mode==="dark"?"grey":"white",color:props.mode==="dark"?"white":"grey"}} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleTextChangeUp}>Convert to uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleTextChangeDown}>Convert to lowercase</button>
      <button className="btn btn-primary mx-2" onClick={getnumber}>number</button>
      <button className="btn btn-primary mx-2" onClick={getClear}>clear</button>
      <button  onClick={speak} className="btn btn-warning mx-2 my-2">Speak</button>
    </div>
    <div className="container my-3" style={{color:props.mode==="dark"?"white":"black"}}>
    <h2>Text Summary</h2>
    <p>{getWordCount(text)} words and {text.length} characters</p>
    <p>{0.08*text.split(" ").length}Minutes Read</p>
    <h2>Preview</h2>
    <p>{text}</p>
    </div>
    </>
    
  )
}
