import React from 'react';
import './hexagons.css';

export const HexagonGrid = ({ children }) => {
  return <ul id="hexGrid">{children}</ul>;
};

export const HexagonItem = ({ img, alt, title, desc }) => {
  return (
    <li className="hex">
      <div className="hexIn">
        <div className="hexLink">
          <img src={img} alt={alt} />
          <h1>{title}</h1>
          <p>{desc}</p>
        </div>
      </div>
    </li>
  );
};
