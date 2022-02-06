import { useState, useEffect } from 'react';
import styles from './MemoryGame.module.css';
import Scoreboard from '../Scoreboard/Scoreboard';
import Wrapper from '../Wrapper/Wrapper';
import Card from '../Card/Card';

export default function MemoryGame({data}) {
  const [gameData, setGameData] = useState(data);
  const [turnData, setTurnData] = useState(0);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  return (
    <div className={styles.gameDiv}>
      {/* replay disabled if the score is 0 */}
      {/* create main nav, contains replay and back to home */}
      {(gameOver === false) &&
        <>
          <Scoreboard 
            score={score} 
            bestScore={bestScore} 
          />
          <Wrapper>
            <Card data={data[25]}/>
            <Card data={data[10]}/>
            <Card data={data[2]}/>
            <Card data={data[3]}/>
            <Card data={data[4]}/>
          </Wrapper>
        </>
      }
    </div>
  );
};
