import styles from './Wrapper.module.css';

export default function Wrapper({column, children}) {
  return (
    <div
      className={
        (column === true)
          ? `${styles.wrapper} ${styles.column}`
          : styles.wrapper
      }
    >
      {children}
    </div>
  );
};
