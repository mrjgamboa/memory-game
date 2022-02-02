import styles from './MemoryGame.module.css';
import Scoreboard from '../Scoreboard/Scoreboard';
import Wrapper from '../Wrapper/Wrapper';
import Card from '../Card/Card';

export default function MemoryGame({data}) {
  return (
    <div className={styles.gameDiv}>
      <Scoreboard />
      <Wrapper column={false}>
        <Card obj={data[25]}/>
        <Card obj={data[10]}/>
        <Card obj={data[2]}/>
        <Card obj={data[3]}/>
        <Card obj={data[4]}/>
      </Wrapper>
    </div>
  );
};
