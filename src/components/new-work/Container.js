import React from 'react';

export default function Container({ children, className = '' }) {
  return (
    <div className={`container work-container ${className}`}>{children}</div>
  );
}
