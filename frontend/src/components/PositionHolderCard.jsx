import React from 'react';
import '../App.css';

function PositionHolderCard({ post, name, vision, imageUrl }) {
  return (
    <div className="position-holder-card">
      <div className="card-header">
        <div className="image-placeholder">
          {imageUrl ? (
            <img src={imageUrl} alt={`${name}`} />
          ) : (
            <span>Image</span>
          )}
        </div>
      </div>
      
      <div className="card-content">
        <h3>{post}</h3>
        <h4>{name}</h4>
        <div className="vision-placeholder">
          {vision ? (
            `"${vision}"`
          ) : (
            "Vision Statement Placeholder"
          )}
        </div>
      </div>
    </div>
  );
}

export default PositionHolderCard;