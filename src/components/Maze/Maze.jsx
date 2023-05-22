import React, { useState, useEffect } from "react";
import Entity from "@components/Entity";
import styles from './Maze.module.css';
import { navigate } from "../../pages";

const Maze = ({ json, w, h, daytime, character}) => {
  const mazeClass = `${styles.maze} ${daytime === 'night' ? styles.darkMask : ''}`;
  const [playerPosition, setPlayerPosition] = useState({ x: 1, y: 1 });
  const [playerDirection, setPlayerDirection] = useState('front');
  const [mazeJson, setMazeJson] = useState(json); 

  const handleKeyDown = (event) => {
    const { key } = event;
    const { x, y } = playerPosition;

    let newX = x;
    let newY = y;

    switch (key) {
      case "ArrowRight":
        setPlayerDirection('right');
        newX = x + 1;
        break;
      case "ArrowLeft":
        setPlayerDirection('left');
        newX = x - 1;
        break;
      case "ArrowUp":
        setPlayerDirection('back');
        newY = y - 1;
        break;
      case "ArrowDown":
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
        console.log('g')
        navigate('win')
      }

      newMazeJson[playerPosition.y][playerPosition.x] = ' ';
      newMazeJson[newY][newX] = 'p';
      setMazeJson(newMazeJson);

    }
  };

  const isPositionValid = (x, y) => {
      const col = mazeJson[y][x];
      if (col === ' '|| col === 'g') {
        return true;
      }
    return false;
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
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
      {mazeJson.map((row, ri) =>
        row.map((col, ci) => {
          const key = `${ri}-${ci}`;
          switch (col) {
            case 'p':
              return <Entity key={key} letter='p' character={character} direction={playerDirection} />;
            case 'g':
              return <Entity key={key} letter='g' />;
            case '+':
              return <Entity key={key} letter='t' />;
            case '-':
              return <Entity key={key} letter='w' />;
            case '|':
              return <Entity key={key} letter='l' />;
            case ' ':
              return <Entity key={key} letter=' ' />;
            default:
              return null;
          }
        })
      )}
    </div>
  );
};

export default Maze;
