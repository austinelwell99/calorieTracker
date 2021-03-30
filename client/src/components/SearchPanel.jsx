import React from 'react';
import WebcamList from './WebcamList.jsx';

const SearchPanel = ({ getWebcams, webcamList, updateSelectedWebcam }) => (
  <div className='searchPanelContainer'>
    <button onClick={getWebcams}>Search</button>
    <WebcamList
      webcamList={webcamList}
      updateSelectedWebcam={updateSelectedWebcam}
    />
  </div>
);

export default SearchPanel;
