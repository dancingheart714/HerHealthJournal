import classes from './MonthTracker.module.css';

import MonthTrackerItem from './MonthTrackerItem';

const MonthTracker = (props) => {
  const addMoodWithItemHandler = (date) => {
    props.addMoodWithItem(date);
  };

  return (
    <div>
      <h2 className={classes['month-header']}>
        {' '}
        <span className={classes['month-name']}>October</span> 2021
      </h2>
      <div className={classes['month-tracker']}>
        <div className={classes['week-day'] + ' 😃'}>Sun</div>
        <div className={classes['week-day']}>Mon</div>
        <div className={classes['week-day']}>Tues</div>
        <div className={classes['week-day']}>Wed</div>
        <div className={classes['week-day']}>Thur</div>
        <div className={classes['week-day']}>Fri</div>
        <div className={classes['week-day']}>Sat</div>

        {props.moods.map((mood) => (
          <MonthTrackerItem
            key={mood.id}
            mood={mood.mood}
            number={mood.date === '' ? '' : mood.date.getDate()}
            date={mood.date}
            addMoodWithItem={addMoodWithItemHandler}
          />
        ))}
      </div>
    </div>
  );
};

export default MonthTracker;