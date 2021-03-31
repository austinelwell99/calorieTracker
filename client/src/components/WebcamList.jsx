import React from 'react';
import WebcamListItem from './WebcamListItem.jsx';

const WebcamList = ({
  title,
  webcamList,
  favoriteIDsList,
  updateSelectedWebcam,
  toggleFavorite,
}) => (
  <div className='webcamListContainer'>
    <h3>{title}</h3>
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
