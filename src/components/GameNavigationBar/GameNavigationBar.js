import styles from './GameNavigationBar.module.css';

export default function GameNavigationBar({
  onReplayClick, onHomeClick
}) {
  return (
    <nav
      className={styles.nav}
      aria-label='primary'
    >
      <button 
        className={styles.button}
        onClick={onHomeClick}
      >
        &#8617;home
      </button>
      <button 
        className={styles.button}
        onClick={onReplayClick}
      >
        &#8634;retry
      </button>
    </nav>
  );
};
