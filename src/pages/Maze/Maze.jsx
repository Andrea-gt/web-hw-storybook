import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import Maze from '../../components/Maze';
import styles from './Maze.module.css';
import Countdown from '../../components/Countdown/Countdown';

function MazePage({
  character, daytime, mazeSize, mazeTime,
}) {
  const [mazeLayout, setMazeLayout] = useState(null);
  const mazeSizeFetch = +mazeSize;

  const handleRequest = async (w, h) => {
    const response = await fetch(`https://maze.uvgenios.online/?type=json&w=${w}&h=${h}`);
    return await response.json();
  };

  const loadMaze = async () => {
    const val = await handleRequest(mazeSizeFetch, mazeSizeFetch);
    setMazeLayout(val);
  };

  useEffect(() => {
    loadMaze();
  }, []);

  if (!mazeLayout) {
    return 'Loading...';
  }

  return (
    <div className={styles.container}>
      {mazeTime !== '' && <Countdown seconds={mazeTime} />}
      <Maze
        w={mazeSizeFetch}
        h={mazeSizeFetch}
        json={mazeLayout}
        daytime={daytime}
        character={character.toLowerCase()}
      />
    </div>
  );
}

MazePage.propTypes = {
  character: PropTypes.string.isRequired,
  daytime: PropTypes.string.isRequired,
  mazeSize: PropTypes.string.isRequired,
  mazeTime: PropTypes.string.isRequired,
};

export default MazePage;
