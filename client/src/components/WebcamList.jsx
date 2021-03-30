import React from 'react';

const WebcamList = ({ webcamList }) => (
  <div className='webcamListContainer'>
    {webcamList?.map((w) => (
      <div>{w.title}</div>
    ))}
  </div>
);

export default WebcamList;
