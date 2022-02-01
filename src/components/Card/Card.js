import styles from './Card.module.css';

export default function Card({obj}) {
  const { id, name, src, alt, clicked } = obj;

  return (
    <div className={styles.card}>
      <div className={styles.imgContainer}>
        <img 
          src={src} 
          alt={alt}
          className={styles.img}
        />
      </div>
      <p className={styles.para}>{name}</p>
    </div>
  );
};
