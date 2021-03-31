import React from 'react';

const WebcamListItem = ({ w, updateSelectedWebcam }) => (
  <div
    className='webcamListItemContainer'
    onClick={() => updateSelectedWebcam(w)}
  >
    <div>{w.title}</div>
    <div>{w.location.country}</div>
  </div>
);

export default WebcamListItem;
