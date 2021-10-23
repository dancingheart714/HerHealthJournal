import MoodItem from './MoodItem';

import classes from './MoodList.module.css';

const MoodList = (props) => {
  return (
    <ul className={`${classes['mood-list']} container`}>
      {props.items.map((mood) => {
        return (
          <MoodItem
            key={mood.id}
            mood={mood.mood}
            date={mood.date}
            comment={mood.comment}
            color={mood.color}
          />
        );
      })}
    </ul>
  );
};

export default MoodList;