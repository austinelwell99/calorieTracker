import React from 'react';
import WebcamListItem from './WebcamListItem.jsx';

const WebcamList = ({
  webcamList,
  favoriteIDsList,
  updateSelectedWebcam,
  toggleFavorite,
}) => (
  <div className='webcamListContainer'>
    {webcamList?.map((w) => (
      <WebcamListItem
        key={w.id}
        w={w}
        updateSelectedWebcam={updateSelectedWebcam}
        favorited={favoriteIDsList.includes(w.id)}
        toggleFavorite={toggleFavorite}
      />
    ))}
  </div>
);

export default WebcamList;
