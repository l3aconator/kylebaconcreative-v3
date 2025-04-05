import React from 'react';

export default function WorkMiddle({ middleimage, middlealt }) {
  return (
    <div className="work-detail-img-box">
      <img className="work-detail-full-img" src={middleimage} alt={middlealt} />
    </div>
  );
}
