import React from 'react';
import WebcamListItem from './WebcamListItem.jsx';

const WebcamList = ({ webcamList }) => (
  <div className='webcamListContainer'>
    {webcamList?.map((w) => (
      <WebcamListItem w={w} key={w.id} />
    ))}
  </div>
);

export default WebcamList;
