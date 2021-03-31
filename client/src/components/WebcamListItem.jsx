import React from 'react';

const WebcamListItem = ({
  w,
  updateSelectedWebcam,
  favorited,
  toggleFavorite,
}) => (
  <div className='webcamListItemContainer'>
    <div onClick={() => updateSelectedWebcam(w)}>{w.title}</div>
    <div>{w.location.country}</div>
    <i
      className={favorited ? 'fas fa-gem' : 'far fa-gem'}
      onClick={() => toggleFavorite(w)}
    />
  </div>
);

export default WebcamListItem;
