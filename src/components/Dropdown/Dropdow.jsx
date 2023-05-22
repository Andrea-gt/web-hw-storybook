import React from 'react';
import styles from './Dropdown.module.css';

function Dropdown({ label = 'Character:', options = ['Inuyasha', 'Kagome'], value, onChange }) {
    return (
      <div className={styles.dropdown_container}>
        <label htmlFor="dropdown">{label}</label>
        <select
          id="dropdown"
          className={styles.dropdown}
          value={value}
          onChange={onChange}
        >
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    );
  }
  

export default Dropdown;