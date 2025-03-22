

// import logo from './logo.svg';
import './App.css';

import React,{useRef} from 'react'
import * as tf  from "@tensorflow/tfjs";
import * as facemesh from "@tensorflow-models/facemesh";
import Webcam from 'react-webcam';


function App() {
   // creating webcam refernce
  const webcamref=useRef(null);
  const canvasref = useRef(null);



  return (
    <div className="App">
      <Webcam ref={webcamref} style={
        {
         position:"absolute",
         marginLeft:"auto",
         marginRight:"auto",
         left:0,
         right:0,
         textAlign:"center",
         width:
        }
      }/>
    </div>
  );
}

export default App;
