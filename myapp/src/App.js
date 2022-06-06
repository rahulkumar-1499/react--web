
import './App.css';
import About from './Components/About';
import Navbar from './Components/Navbar';
import Textform from './Components/Textform';
 import React,{useState} from 'react'
import Alert from './Components/Alert';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const[mode,setmode]=useState("light");
  const[alert,setalert]=useState(null);

  const showAlert=(message,type)=>
  {
    setalert({
      message:message,
      type:type
    })
   setTimeout(()=>{
     setalert(null);
   },2000)
  }
  const togglemode=()=>
  {
    if(mode==="light")
    {
      setmode("dark");
      document.body.style.backgroundColor="grey";
      showAlert("dark mode enabled"," success ");
    }
    else
    {
      setmode("light");
      document.body.style.backgroundColor="white";
      showAlert("light mode enabled"," success ");
    }
  }
  return (
    <>
         <BrowserRouter>
         <Navbar title="TextConvert"mode={mode} togglemode={togglemode} AboutUs="About Us"/>           {/*using props*/ }
       <div className="container my-3">
         <Alert alert={alert}/>
         </div> 
      <Routes>
          <Route path="/about" element={<About />} />
          
          < Route path="/"
            element= {<Textform heading="Enter the text to analyse: " mode={mode} showAlert={showAlert}/>} /> 
          </Routes>
          </BrowserRouter>
    </>
  );
}

export default App;
