import styles from './MemoryGame.module.css';
import Scoreboard from '../Scoreboard/Scoreboard';
import Wrapper from '../Wrapper/Wrapper';
import Card from '../Card/Card';

export default function MemoryGame({data}) {
  return (
    <div>
      <Scoreboard />
      <Wrapper column={false}>
        <Card obj={data[0]}/>
        <Card obj={data[1]}/>
        <Card obj={data[2]}/>
        <Card obj={data[3]}/>
      </Wrapper>
    </div>
  );
};
