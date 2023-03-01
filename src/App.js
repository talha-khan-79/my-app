import './App.css';
import Navbar from "./components/Navbar";
import TextForm from './components/TextForm';
// import About from './components/About';
import Alert from './components/Alert';
import React, { useState } from 'react';


// import {
//   BrowserRouter as Router, Routes, Route
// } from "react-router-dom";

function App() {



  const [name, setName] = useState("Enable Darkmode");
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState("null");




  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }


  const openClick = () => {
    setMode("dark")
    document.body.style.backgroundColor = '#2ba84a';
    showAlert(": Green mode has been enabled", "Success")
    document.title = 'TextUtils - Green Mode';
  }

  const closeClick = () => {
    setMode("dark")
    document.body.style.backgroundColor = '#a24936';
    showAlert(": Red mode has been enabled", "Success")
    document.title = 'TextUtils - Red Mode';
  }


  const toggleMode = () => {

    if (mode === 'light') {
      setMode("dark")
      setName("Enable Lightmode")
      showAlert(": Darkmode has been enabled", "success")
      document.body.style.backgroundColor = '#042743';
      document.title = 'TextUtils - Dark Mode';

      //  setInterval(() => {
      //   document.title='subscribe Now';
      //  }, 3000);
      //  setInterval(() => {
      //   document.title='hit like button';
      //  }, 2500);

    }
    else {
      setMode("light")

      setName("Enable Darkmode")
      showAlert(": Lightmode has been enabled", "success")
      document.body.style.backgroundColor = 'white';
      document.title = 'TextUtils - Light Mode';

    }
  }


  return (
    <>
      {/* <Router> */}

      <Navbar title="TextUtils" about="About " mode={mode} toggleMode={toggleMode} openClick={openClick} closeClick={closeClick} name={name} />
      <Alert alert={alert} />

      <div className='container my-3'>

      <TextForm heading="ENTER THE TEXT TO ANALYZE" mode={mode} showAlert={showAlert} openClick={openClick} closeClick={closeClick} alert={alert} />

    
      </div>
      
</>
  );


      //   {/* <switch>
      //       <Routes>
      //         {/* <Route exact path='/' element={<} /> */}
      //         {/* <Route exact path='/About' element={<About />} />
      //       </Routes>
      //       <About />
      //     </switch> */}

      // {/* </Router> /} */}
   
 
  
}

export default App;
