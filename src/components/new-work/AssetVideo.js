import React from 'react';

export default function AssetVideo({ children, src }) {
  return (
    <div className="asset-video">
      {children}
      <video src={src} autoPlay muted loop playsInline />
    </div>
  );
}
