const styles = {
  footer: {
    backgroundColor: 'inherit',
    color: 'inherit',
    padding: '1rem 1.5rem',
    textAlign: 'right',
    width: '100%',
  },
  p: {
    fontSize: '1.3em',
  },
  a: {
    color: 'inherit',
  },
};

export default function Footer({builder, link}) {
  return (
    <footer style={styles.footer}>
      <p style={styles.p}>
        Built by:&nbsp;
        <a
          href={link}
          rel='noopener noreferrer'
          style={styles.a}
          target='_blank'
        >
          {builder}
        </a>
      </p>
    </footer>
  );
};
