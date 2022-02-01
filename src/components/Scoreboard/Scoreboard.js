import styles from './Scoreboard.module.css';

export default function Scoreboard({ score, bestScore }) {
  return (
    <nav className={styles.nav}>
      <p className={styles.para}>
        Score:
        <span className={styles.span}>{score}</span>
      </p>
      <p className={styles.para}>
        Best Score:
        <span className={styles.span}>{bestScore}</span>
      </p>
    </nav>
  );
};
