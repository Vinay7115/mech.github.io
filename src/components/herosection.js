import React, { useRef, useEffect } from "react";

function Herosection() {
  const videoRef = useRef(null);

  useEffect(() => {
    // Set the playback speed of the video
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.25; // 0.5 means half speed, adjust as needed
    }
  }, []);

  return (
    <div className="video-container">
      <video ref={videoRef} autoPlay loop muted className="background-video">
        <source src={require("../video1.mp4")} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-overlay"></div> {/* Overlay element */}
      <div className="content5">
        <h1>MEKANIKA</h1>
        {/* <br/> */}
        <h2>The official society of Mechanical Engneering Department</h2>
        <h3>IIT Kharagpur</h3>
      </div>
    </div>
  );
}

export default Herosection;

// import './BackgroundVideo.css'; // Import the CSS file
