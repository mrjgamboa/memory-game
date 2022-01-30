const styles = {
  height: '100%',
  display: 'flex',
  flexFlow: 'column wrap',
  justifyContent: 'space-around',
  alignContent: 'flex-start',
  overflow: 'auto',
};

export default function Wrapper({children}) {
  return (
    <div style={styles}>{children}</div>
  );
};
