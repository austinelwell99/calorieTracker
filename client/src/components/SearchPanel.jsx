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
}) => (
  <div className='searchPanelContainer'>
    <SearchOptions getWebcams={getWebcams} total={total} />
    <WebcamList
      title='Live Webcams'
      webcamList={webcamList}
      favoriteIDsList={favoriteIDsList}
      updateSelectedWebcam={updateSelectedWebcam}
      toggleFavorite={toggleFavorite}
    />
    <WebcamList
      title='Favorites'
      webcamList={favoritesList}
      favoriteIDsList={favoriteIDsList}
      updateSelectedWebcam={updateSelectedWebcam}
      toggleFavorite={toggleFavorite}
    />
  </div>
);

export default SearchPanel;
