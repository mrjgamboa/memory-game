import { useState, useEffect } from 'react';
import { generateTurnData } from './utils';
import styles from './MemoryGame.module.css';
import GameNavigationBar from '../GameNavigationBar/GameNavigationBar';
import Scoreboard from '../Scoreboard/Scoreboard';
import Wrapper from '../Wrapper/Wrapper';
import CardsContainer from '../CardsContainer';

export default function MemoryGame({data, backToHome}) {
  const [gameData, setGameData] = useState([...data]);
  const [turnData, setTurnData] = useState([...generateTurnData(gameData)]);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [result, setResult] = useState(null);

  console.log('data: ', data);
  console.log('game data: ', gameData);
  console.log('turn data: ', turnData);

  const isOver = (string, finalScore) => {
    setGameOver(true);
    setResult(string);
    setScore(0);
    if (finalScore > bestScore) setBestScore(finalScore);
  };

  const clickCardOnce = (id) => {
    const updatedScore = score + 1;
    if (updatedScore === gameData.length) {
      isOver('You cleared the game!', updatedScore);
    } else {
      const dataCopy = gameData;
      const index = dataCopy.findIndex((x) => x.id === id);
      dataCopy[index] = {
        ...dataCopy[index],
        clicked: true,
      };
      setGameData([...dataCopy]);
      setScore(updatedScore);
      setTurnData([...generateTurnData(gameData)]);
      if (updatedScore > bestScore) setBestScore(updatedScore);
    }
  };

  const clickCardTwice = (name) => {
    isOver(`Clicked ${name} twice, You failed!`, score);
  };

  const onCardClick = (clicked, id, name) => {
    console.log(clicked === true);
    return (clicked === true) 
      ? clickCardTwice(name)
      : clickCardOnce(id)
  };

  const replayGame = () => {
    setGameData([...data]);
    setScore(0);
    setTurnData([...generateTurnData(data)]);
    setGameOver(false);
  };

  // useEffect(() => {
  //   setTurnData(generateTurnData(gameData));
  // }, [score]);

  return (
    <div className={styles.gameDiv}>
      {(gameOver === false)
        ? 
          <>
            <div className={styles.navContainer}>
              <Wrapper>
                <GameNavigationBar 
                  onReplayClick={replayGame}
                  onHomeClick={backToHome}
                />
                <Scoreboard 
                  bestScore={bestScore} 
                  score={score}
                  max={gameData.length}
                />
              </Wrapper>
            </div>
            <CardsContainer 
              dataArray={turnData}
              onCardClick={onCardClick}
            />
          </>
        : 
          <div className={styles.resultContainer}>
            <Wrapper>
              <h2 className={styles.h2}>Game Over!</h2>
              <p className={styles.result}>{result}</p>
              <GameNavigationBar 
                onReplayClick={replayGame}
                onHomeClick={backToHome}
              />
            </Wrapper>
          </div>
      }
    </div>
  );
};
