import React from "react";
import styles from './Win.module.css'
import { navigate } from "..";

const Win = () => {
    const handleClick = () => {
        navigate('welcome')
    }

    console.log('Win')
    return (
        <div className={styles.container}>
            <h1>You Win!</h1>
            <button onClick={handleClick} className={styles.button}>Try again</button>
        </div>
    )
}
export default Win