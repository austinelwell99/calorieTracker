import React from 'react';
import WebcamList from './WebcamList.jsx';
import SearchOptions from './SearchOptions.jsx';

const SearchPanel = ({
  getWebcams,
  webcamList,
  updateSelectedWebcam,
  total,
}) => (
  <div className='searchPanelContainer'>
    <SearchOptions getWebcams={getWebcams} total={total} />
    <WebcamList
      webcamList={webcamList}
      updateSelectedWebcam={updateSelectedWebcam}
    />
  </div>
);

export default SearchPanel;
