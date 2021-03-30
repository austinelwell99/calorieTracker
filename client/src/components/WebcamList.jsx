import React from 'react';
import WebcamListItem from './WebcamListItem.jsx';

const WebcamList = ({ webcamList, updateSelectedWebcam }) => (
  <div className='webcamListContainer'>
    {webcamList?.map((w) => (
      <WebcamListItem
        w={w}
        key={w.id}
        updateSelectedWebcam={updateSelectedWebcam}
      />
    ))}
  </div>
);

export default WebcamList;
