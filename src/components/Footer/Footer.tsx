import classes from './Footer.module.css';

const Footer = () => {
  const today = new Date();
  return (
    <footer className={classes.footer}>
      <p>Alexander Rusiecki &copy; {today.getFullYear()}</p>
    </footer>
  );
};

export default Footer;
