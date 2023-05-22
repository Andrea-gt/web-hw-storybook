import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Maze.module.css';
import { navigate } from '../../pages';
import Entity from '../Entity/index';

function Maze({
  json, w, h, daytime, character,
}) {
  const mazeClass = `${styles.maze} ${daytime === 'night' ? styles.darkMask : ''}`;
  const [playerPosition, setPlayerPosition] = useState({ x: 1, y: 1 });
  const [playerDirection, setPlayerDirection] = useState('front');
  const [mazeJson, setMazeJson] = useState(json);

  const handleKeyDown = (event) => {
    const { key } = event;
    const { x, y } = playerPosition;

    const isPositionValid = (newX, newY) => {
      const col = mazeJson[newY][newX];
      if (col === ' ' || col === 'g') {
        return true;
      }
      return false;
    };

    let newX = x;
    let newY = y;

    switch (key) {
      case 'ArrowRight':
        setPlayerDirection('right');
        newX = x + 1;
        break;
      case 'ArrowLeft':
        setPlayerDirection('left');
        newX = x - 1;
        break;
      case 'ArrowUp':
        setPlayerDirection('back');
        newY = y - 1;
        break;
      case 'ArrowDown':
        setPlayerDirection('front');
        newY = y + 1;
        break;
      default:
        return;
    }

    if (isPositionValid(newX, newY)) {
      setPlayerPosition({ x: newX, y: newY });
      const newMazeJson = [...mazeJson];

      if (newMazeJson[newY][newX] === 'g') {
        navigate('win');
      }

      newMazeJson[y][x] = ' ';
      newMazeJson[newY][newX] = 'p';
      setMazeJson(newMazeJson);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [playerPosition]);

  return (
    <div
      className={mazeClass}
      style={{
        gridTemplateColumns: `repeat(${w * 2 + w + 1}, 50px)`,
        gridTemplateRows: `repeat(${h + h + 1}, 50px)`,
        width: `${((w * 2) + w + 1) * 50}px`,
        height: `${(h + h + 1) * 50}px`,
      }}
    >
      {mazeJson.map((row, ri) => row.map((col, ci) => {
        const key = `${ri}-${ci}`;
        switch (col) {
          case 'p':
            return <Entity key={key} letter="p" character={character} direction={playerDirection} />;
          case 'g':
            return <Entity key={key} letter="g" />;
          case '+':
            return <Entity key={key} letter="t" />;
          case '-':
            return <Entity key={key} letter="w" />;
          case '|':
            return <Entity key={key} letter="l" />;
          case ' ':
            return <Entity key={key} letter=" " />;
          default:
            return null;
        }
      }))}
    </div>
  );
}

Maze.propTypes = {
  json: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)).isRequired,
  w: PropTypes.number.isRequired,
  h: PropTypes.number.isRequired,
  daytime: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
};

export default Maze;
