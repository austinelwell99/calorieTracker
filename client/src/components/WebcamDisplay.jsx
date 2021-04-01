import React from 'react';

const WebcamDisplay = ({ selectedWebcam }) => (
  <div className='webcamDisplayContainer'>
    <iframe
      className='selectedWebcamVideo'
      src={`http://webcams.windy.com/webcams/stream/${selectedWebcam?.id}`}
      title={selectedWebcam?.title}
      allowFullScreen={true}
    />
    <div className='selectedWebcamDetails'>
      <div className='selectedWebcamTitle'>{selectedWebcam?.title}</div>
      <div className='selectedWebcamCountryText'>
        {selectedWebcam?.location?.region &&
          selectedWebcam?.location?.country &&
          `${selectedWebcam?.location?.region}, ${selectedWebcam?.location?.country}`}
      </div>
    </div>
  </div>
);

export default WebcamDisplay;
