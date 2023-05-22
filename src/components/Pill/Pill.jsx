import React, { useState } from 'react';
import styles from './Pill.module.css';

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
}


function Pill({ type = 'day', disabled = false, onClick }) {
  const entityClass = `${styles[type]}`;
  
  const handleClick = () => {
    onClick(type);
  };

  return (
    <li className={entityClass} disabled={disabled} onClick={handleClick}>
      {capitalize(type)}
    </li>
  );
}

export default Pill;