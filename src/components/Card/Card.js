import styles from './Card.module.css';

export default function Card({data, onCardClick}) {
  const { id, name, src, alt, clicked } = data;

  return (
    <div 
      className={styles.card} 
      key={id}
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
