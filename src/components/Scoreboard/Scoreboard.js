import styles from './Scoreboard.module.css';

export default function Scoreboard({ score, bestScore }) {
  return (
    <nav className={styles.nav}>
      <p className={styles.para}>
        Score:
        <span className={styles.span}>{score}15</span>
      </p>
      <p className={styles.para}>
        Best Score:
        <span className={styles.span}>{bestScore}15</span>
      </p>
    </nav>
  );
};
