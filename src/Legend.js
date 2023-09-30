import React from 'react';

const Legend = ({ items }) => {
  return (
    <ul style={{ listStyleType: 'none', padding: 0 }}>
      {items.map(({ color, label, link }, i) => (
        <li key={i} style={{ display: 'flex', alignItems: 'center' }}>
          <div
            style={{
              width: 20,
              height: 20,
              backgroundColor: color,
              marginRight: 10,
            }}
          />
          <a 
            href={link}
            style={{ color: 'inherit', textDecoration: 'none' }}
            target="_blank"
          >
            {label}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Legend;