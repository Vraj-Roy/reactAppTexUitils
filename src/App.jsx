import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Textform from './components/Textform';
import About from './components/About';
import { useState } from 'react';
import Alert from './components/Alert';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Link
} from "react-router-dom";



function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) =>{
    setAlert({
        message: message,
        type:type
      })  
      setTimeout(() => {
        setAlert(null,null)
      }, 1500);

  }

  const toggleMode = () =>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor="#303030";
      showAlert('Dark Mode has been enabled', 'success');
      document.title='Text Utils - Dark Mode';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor="white";
      showAlert('Light Mode has been enabled', 'success');
      document.title='Text Utils - Light Mode';
  
    }
  }

  
  return (
    <>  
    
    
    
    <Router>
    <NavBar title='TextUt ils' aboutText='about TextUtils' mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className="container my-3">
     <Routes>

     <Route exact path="/" element={ <Textform heading="Enter The Text To Analyze " mode={mode} showAlert={showAlert}/>}/>
     <Route exact path="/about" element={ <About mode={mode}/>}/>
 
    
     </Routes>
 
    </div>
    </Router>
    
 
    </>
  );
}

export default App;
