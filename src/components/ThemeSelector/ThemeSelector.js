import styles from './ThemeSelector.module.css';

export default function ThemeSelector({data, onChildClick}) {
  return (
    <div className={styles.div}>
      {data.map((item) => (
        <div key={item.id} onClick={() => onChildClick(item.id)}>
          <p>Theme: {item.name}</p>
          <p>Count: {item.count}</p>
          <img 
            src={item.img} 
            alt='theme example'
            className={styles.img}
          />
        </div>
      ))}
    </div>
  );
};
