import React from 'react';
import '../componentsCss/FrontPageCards.css';

function FrontPageCards({ icon, title, content }) {
  return (
    <div className="card">
      <img src= {icon} alt="Icon" className="card-icon" />
      <h2 className="card-title">{title}</h2>
      <p className="card-content">{content}</p>
    </div>
  );
}

export default FrontPageCards;
