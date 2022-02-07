import styles from './GameNavigationBar.module.css';


export default function GameNavigationBar({
  onReplayClick, onHomeClick
}) {
  return (
    <nav
      className={styles.nav}
      aria-label='primary'
    >
      <button className={styles.button}>
        &#8617;home
      </button>
      <button className={styles.button}>
        &#8634;retry
      </button>
    </nav>
  );
};
