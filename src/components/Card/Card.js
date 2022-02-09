import styles from './Card.module.css';

export default function Card({data, onCardClick}) {
  const { id, name, src, alt } = data;

  return (
    <div 
      className={styles.card} 
      id={id}
      onClick={onCardClick}
    >
      <div>
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
