import './App.css';
import Alert from './components/Alert';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light')

  const toggle = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#042743'
      showAlert("Dark Mode Has Enabled", "success")
    }
    else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light Mode Has Enabled", "success")
    }
  }

  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 2000);
  }

  return (
    <>
    {/* <Router> */}
      <Navbar title='TextUtils' aboutText='About' mode={mode} toggle={toggle} />
      <Alert alert={alert} />
      <div className="container my-3">
      <TextForm heading='TesxtUtils - Enter some text below to play with it!' mode={mode} showAlert={showAlert} />
      {/* <Routes>
        <Route exact path="/TextUtils" element={<TextForm heading='Enter your text below to captilize' mode={mode} showAlert={showAlert} />} />
        <Route exact path="/TextUtils/about" element={<About mode={mode}/>} />
      </Routes> */}
      </div>
    {/* </Router> */}
    </>
  );
}

export default App;

