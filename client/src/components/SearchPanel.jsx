import React from 'react';
import WebcamList from './WebcamList.jsx';
import SearchOptions from './SearchOptions.jsx';

const SearchPanel = ({ getWebcams, webcamList, updateSelectedWebcam }) => (
  <div className='searchPanelContainer'>
    <SearchOptions getWebcams={getWebcams} />
    <WebcamList
      webcamList={webcamList}
      updateSelectedWebcam={updateSelectedWebcam}
    />
  </div>
);

export default SearchPanel;
