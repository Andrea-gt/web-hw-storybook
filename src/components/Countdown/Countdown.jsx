import React, { useEffect, useState, useRef } from "react";
import styles from './Countdown.module.css';
import { navigate } from "../../pages";

const formatTime = (time) => {
    let minutes = Math.floor(time/60)
    let seconds = Math.floor(time - minutes * 60)

    if(minutes <= 10 ) minutes = '0' + minutes;
    if(seconds <= 10 ) seconds = '0' + seconds;
    return minutes + ':' + seconds
}

function Countdown({ seconds }) {
  const [countdown, setCountdown] = useState(seconds);
  const timerId = useRef();

  useEffect(() => {
    timerId.current = setInterval(() => {
      setCountdown(prev => prev - 1);
    }, 1000);

    return () => {
      clearInterval(timerId.current);
    };
  }, []);

  useEffect(() => {
    if (countdown <= 0) {
      clearInterval(timerId.current);
      navigate('welcome');
      alert('No time left');
    }
  }, [countdown]);

  return (
    <div className={styles.countdown_container}>
      <h2>Time left: {formatTime(countdown)}</h2>
    </div>
  );
}

export default Countdown;
