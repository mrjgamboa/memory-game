import styles from './HowToPlay.module.css';

export default function HowToPlay({list}) {
  return (
    <div className={styles.div}>
      <h2 className={styles.h2}>
        How To Play
      </h2>
      <ol className={styles.ol}>
        {list.map((item, index) => {
          return (
            <li 
              key={index+1}
              className={styles.li}
            >
              {item}
            </li>
          );
        })}
      </ol>
    </div>
  );
};
