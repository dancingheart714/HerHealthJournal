import classes from './Header.module.css';

const Header = (props) => {
  return (
    <header>
      <h1 className={classes['heading-primary']}>
        <div className={classes['heading-primary--first-word']}>Mood</div>
        <div className={classes['heading-primary--second-word']}>Tracker</div>
      </h1>
    </header>
  );
};

export default Header;