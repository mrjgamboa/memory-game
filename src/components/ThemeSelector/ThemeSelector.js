import styles from './ThemeSelector.module.css';

export default function ThemeSelector({data, onChildClick}) {
  return (
    <div className={styles.div}>
      <h2 className={styles.h2}>Game theme</h2>
      {data.map((item) => (
        <div 
          key={item.id} 
          onClick={() => onChildClick(item.id)}
          className={styles.item}
        >
          <div className={styles.imgDiv}>
            <img 
              src={item.img} 
              alt='theme example'
              className={styles.img}
            />
          </div>
          <div className={styles.detailsDiv}>
            <p>Theme: {item.name}</p>
            <p>Count: {item.count}</p>
          </div>
        </div>
      ))}
    </div>
  );
};
