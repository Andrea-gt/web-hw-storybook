import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Notification.module.css';

function Notification({
  children,
  type,
  dismissable,
}) {
  const [show, setShow] = useState(true);

  if (!show) {
    return null;
  }

  return (
    <div className={`${styles.notification} ${styles[type]}`}>
      {
        dismissable ? (
          <span onClick={() => setShow(false)}>
            &times;
          </span>
        ) : null
      }
      {children}
    </div>
  );
}

Notification.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string.isRequired,
  dismissable: PropTypes.bool,
};

Notification.defaultProps = {
  dismissable: true,
};

export default Notification;
