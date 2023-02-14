import React from 'react';

const Legend = ({ items }) => {
  return (
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {items.map(({ color, label }, i) => (
        <li key={i} style={{ display: 'flex', alignItems: 'center' }}>
          <div
            style={{
              width: 20,
              height: 20,
              backgroundColor: color,
              marginRight: 10,
            }}
          />
          <span>{label}</span>
        </li>
      ))}
    </ul>
  );
};

export default Legend;