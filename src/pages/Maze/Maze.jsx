import React from "react";
import { useEffect, useState } from "react";
import Maze from "../../components/Maze";
import styles from './Maze.module.css';
import Countdown from "../../components/Countdown/Countdown";

const MazePage = ({ character, daytime, mazeSize, mazeTime}) => {
  const [mazeLayout, setMazeLayout] = useState(null);
  const mazeSizeFetch = +mazeSize

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
      <Maze w={mazeSizeFetch} h={mazeSizeFetch} json={mazeLayout} daytime={daytime} character={character.toLowerCase()} />
    </div>
  );
};

export default MazePage;
