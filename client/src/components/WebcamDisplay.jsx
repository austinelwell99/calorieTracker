import React from 'react';

const WebcamDisplay = ({ selectedWebcam }) => (
  <div className='webcamDisplayContainer'>
    <iframe
      className='selectedWebcamVideo'
      src={`http://webcams.windy.com/webcams/stream/${selectedWebcam?.id}`}
      title={selectedWebcam?.title}
      allowFullScreen={true}
    />
    {/* <iframe
      className='selectedWebcamVideo'
      src={document.getElementById('main')?.children[0]?.src}
      title={selectedWebcam?.title}
      allowFullScreen={true}
    /> */}
    <div className='selectedWebcamDetails'>
      <h1>{selectedWebcam?.title}</h1>
      <h1>{selectedWebcam?.location?.country}</h1>
    </div>
  </div>
);

export default WebcamDisplay;
