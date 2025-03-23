

// import logo from './logo.svg';
import './App.css';

import React, { useRef } from 'react'
import * as tf from "@tensorflow/tfjs";
import * as facemesh from "@tensorflow-models/facemesh";
import Webcam from 'react-webcam';

 

function App() {
  // creating webcam refernce
  const webcamref = useRef(null);
  const canvasref = useRef(null);

  const runFacemesh = async () => {
    const net = await facemesh.load({
      inputResolution: 
      { width: 640, height: 480 }, 
      scale: 0.0
    });
    setInterval(()=>{
       detect(net)
    },100)
  };
  // create detect function
  const detect = async (net) => {
    if (typeof webcamref.current !== "undefined" && webcamref.current !== null && webcamref.current.video.readState === 4){
       // get  video properties

       const video=webcamref.current.video;
       const videoWidth=webcamref.current.videoWidth;
       const videoHeight=webcamref.current.videoHeight;

       // set video width

       webcamref.current.video.width=videoWidth;
       webcamref.current.video.height=videoHeight;
       // set canvas width
       canvasref.current.width=videoWidth;
       canvasref.current.height=videoHeight;


       // make detection

       const face=await net.estimateFaces(video);
       console.log(face);
       // get canvas context for drawing


      }
};

runFacemesh();
  return (
    <div className="App">
      <Webcam ref={webcamref} style={
        {
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          left: 0,
          right: 0,
          textAlign: "center",
          width: 640,
          zIndex: 9,
          height: 480

        }
      } />
      <canvas ref={canvasref} style={
        {
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          left: 0,
          right: 0,
          textAlign: "center",
          width: 640,
          zIndex: 9,
          height: 480
        }
      }
      />
    </div>
  );
}

export default App;
