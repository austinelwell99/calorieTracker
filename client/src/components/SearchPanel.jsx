import React from 'react';
import WebcamList from './WebcamList.jsx';
import SearchOptions from './SearchOptions.jsx';

const SearchPanel = ({
  getWebcams,
  webcamList,
  updateSelectedWebcam,
  total,
  favoritesList,
  favoriteIDsList,
  toggleFavorite,
  selectedWebcamId,
}) => (
  <div className='searchPanelContainer'>
    <SearchOptions getWebcams={getWebcams} total={total} />
    <h2>Live Webcams</h2>
    <WebcamList
      webcamList={webcamList}
      favoriteIDsList={favoriteIDsList}
      updateSelectedWebcam={updateSelectedWebcam}
      toggleFavorite={toggleFavorite}
      selectedWebcamId={selectedWebcamId}
    />
    <h2>Favorites</h2>
    <WebcamList
      webcamList={favoritesList}
      favoriteIDsList={favoriteIDsList}
      updateSelectedWebcam={updateSelectedWebcam}
      toggleFavorite={toggleFavorite}
      selectedWebcamId={selectedWebcamId}
    />
  </div>
);

export default SearchPanel;
