import classes from './Date.module.css';

const Date = (props) => {
  const month = props.date.toLocaleString('en-US', { month: 'long' });
  const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  const year = props.date.getFullYear();

  return (
 
    <div className={`${classes['date']} ${props.className}`}>

      <div className={classes['date-month']}>{month}</div>
      <div className={classes['date-day']}>{day},</div>
      <div className={classes['date-year']}>{year}</div>
      </div>
  );
};

export default Date;