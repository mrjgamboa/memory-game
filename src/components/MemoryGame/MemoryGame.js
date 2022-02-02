import styles from './MemoryGame.module.css';
import Scoreboard from '../Scoreboard/Scoreboard';
import Wrapper from '../Wrapper/Wrapper';
import Card from '../Card/Card';

export default function MemoryGame({data}) {
  return (
    <div className={styles.div}>
      <Scoreboard />
      <div className={styles.cardContainer}>
        <Wrapper column={false}>
          <Card obj={data[25]}/>
          <Card obj={data[10]}/>
          <Card obj={data[2]}/>
          <Card obj={data[3]}/>
        </Wrapper>
      </div>
    </div>
  );
};
