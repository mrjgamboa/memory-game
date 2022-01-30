import styles from './Header.module.css';

export default function Header({title}) {
  return (
    <header className={styles.header}>
      <h1 className={styles.h1}>{title}</h1>
    </header>
  );
};
