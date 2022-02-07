import styles from './Scoreboard.module.css';

export default function Scoreboard({ bestScore, score }) {
  return (
    <nav 
      className={styles.nav}
      aria-label='scoreboard'
    >
      <p className={styles.para}>
        Best Score:
        <span className={styles.span}>{bestScore}</span>
      </p>
      <p className={styles.para}>
        Score:
        <span className={styles.span}>{score}</span>
      </p>
    </nav>
  );
};
