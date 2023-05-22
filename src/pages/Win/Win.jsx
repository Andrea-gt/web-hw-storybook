import React from 'react';
import styles from './Win.module.css';
import { navigate } from '..';

function Win() {
  const handleClick = () => {
    navigate('welcome');
  };

  return (
    <div className={styles.container}>
      <h1>You Win!</h1>
      <button type="button" onClick={handleClick} className={styles.button}>Try again</button>
    </div>
  );
}
export default Win;
