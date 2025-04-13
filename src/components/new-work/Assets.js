import React from 'react';

export default function Assets({ children, className = '' }) {
  return <div className={`assets ${className}`}>{children}</div>;
}
