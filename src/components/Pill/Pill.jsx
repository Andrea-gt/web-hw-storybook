import React from 'react';
import PropTypes from 'prop-types';
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
    <li
      className={entityClass}
      disabled={disabled}
      onClick={handleClick}
      tabIndex={0}
      role="button"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          handleClick();
        }
      }}
    >
      {capitalize(type)}
    </li>
  );
}

Pill.propTypes = {
  type: PropTypes.string.isRequired,
  disabled: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Pill;
