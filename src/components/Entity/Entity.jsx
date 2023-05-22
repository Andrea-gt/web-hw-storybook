import React from 'react';
import styles from './Entity.module.css';

function Entity ({ letter = 'p', character = 'default', direction = 'front'}) {
    const entityClass = `${styles[letter]} ${styles[character]} ${styles[direction]}`;
    return (
        <div className={entityClass} />
    )
}

export default Entity
