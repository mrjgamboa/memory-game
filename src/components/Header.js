const styles = {
  Header: {
    backgroundColor: 'inherit',
    color: 'inherit',
    padding: '1rem 1.5rem',
  },
  h1: { 
    margin: 0,
    fontFamily: 'inherit',
  },
};

export default function Header({title}) {
  return (
    <header style={styles.Header}>
      <h1 style={styles.h1}>{title}</h1>
    </header>
  );
};
