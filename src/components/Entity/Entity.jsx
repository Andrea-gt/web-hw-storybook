import React from 'react';
import PropTypes from 'prop-types';
import styles from './Entity.module.css';

function Entity({ letter = 'p', character = 'default', direction = 'front' }) {
  const entityClass = `${styles[letter]} ${styles[character]} ${styles[direction]}`;
  return (
    <div className={entityClass} />
  );
}

Entity.propTypes = {
  letter: PropTypes.string.isRequired,
  character: PropTypes.string,
  direction: PropTypes.string,
};

Entity.defaultProps = {
  character: 'kagome',
  direction: 'front',
};

export default Entity;
