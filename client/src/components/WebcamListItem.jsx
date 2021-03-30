import React from 'react';

const WebcamListItem = ({ w, updateSelectedWebcam }) => (
  <div
    className='webcamListItemContainer'
    onClick={() => updateSelectedWebcam(w)}
  >
    {w.title}
  </div>
);

export default WebcamListItem;
