import React from 'react';
import WebcamList from './WebcamList.jsx';

const SearchPanel = ({ getWebcams, webcamList }) => (
  <div className='searchPanelContainer'>
    <button onClick={getWebcams}>Search</button>
    <WebcamList webcamList={webcamList} />
  </div>
);

export default SearchPanel;
