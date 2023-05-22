import React from 'react';
import PropTypes from 'prop-types';
import styles from './Dropdown.module.css';

function Dropdown({
  label = 'Character:',
  options = ['Inuyasha', 'Kagome'],
  value,
  onChange,
}) {
  return (
    <div className={styles.dropdown_container}>
      <label htmlFor="dropdown">{label}</label>
      <select
        id="dropdown"
        className={styles.dropdown}
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

Dropdown.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Dropdown;
