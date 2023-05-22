import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.css';

function Input({
  label,
  name,
  value,
  onChange,
  type,
  required,
  placeholder,
  disabled,
  min,
  max,
}) {
  return (
    <div className={styles.inputContainer}>
      <label htmlFor={name}>
        <span>
          {label || name}
          {required ? '*' : ''}
        </span>
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          min={min}
          max={max}
        />
      </label>
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  required: PropTypes.bool,
  placeholder: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  min: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  max: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Input.defaultProps = {
  required: false,
  disabled: false,
  max: null,
};

export default Input;
