import React from 'react';

const WebcamDisplay = ({ selectedWebcam }) => (
  <div className='webcamDisplayContainer'>{selectedWebcam.title}</div>
);

export default WebcamDisplay;
