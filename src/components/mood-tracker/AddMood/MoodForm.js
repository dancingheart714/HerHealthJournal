import React, { useState } from 'react';

import classes from './MoodForm.module.css';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

const MoodForm = (props) => {
  const defaultOption = '🙂';
  const date = new Date().toISOString().substr(0, 10);

  const [enteredMood, setEnteredMood] = useState(defaultOption);
  const [enteredDate, setEnteredDate] = useState(date);
  const [enteredComment, setEnteredComment] = useState('');

  const [selectedOptionClass, setSelectedOptionClass] = useState(defaultOption);

  const [error, setError] = useState();
  const [dates, setDates] = useState([]);

  const errorHandler = () => {
    setError(null);
  };

  const SubmitHandler = (event) => {
    let replaced;
    event.preventDefault();

    const mood = {
      mood: enteredMood,
      date: new Date(enteredDate),
      comment: enteredComment,
      color: selectedOptionClass,
      id: Math.random().toString(),
    };

    setDates((prevDates) => [...prevDates, mood.date]);

    if (
      dates.filter((e) => e.toISOString() === mood.date.toISOString()).length >
      0
    ) {
      if (
        window.confirm(
          'You already defined mood in that day! Do you want to replace mood in that day?'
        )
      ) {
        setError({
          title: 'You decided to replace mood at:',
          date: mood.date,
        });

        replaced = true;
      }
    } else {
      replaced = false;
    }

    setEnteredComment('');
    props.onSaveNewMood(mood, replaced);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const commentChangeHandler = (event) => {
    setEnteredComment(event.target.value);
  };

  const moodChangeHandler = (event) => {
    setEnteredMood(event.target.value);

    setSelectedOptionClass(event.target.value);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
          date={error.date}
        />
      )}
  
      <form
        onSubmit={SubmitHandler}
        className={`${classes['new-mood-main-form']} container`}
      >
        <div className={classes['new-mood-form-section']}>
          <label htmlFor="mood-selector">Select your mood:</label>

          <select
            name="mood-selector"
            id="mood-selector"
            onChange={moodChangeHandler}
            className={selectedOptionClass}
            defaultValue={defaultOption}
            >
                            <option value="😁" className="😁">
                                Very Happy 😁
                            </option>

                            <option value="😃" className="😃">
                                Happy 😃
                            </option>

                            <option value="😑" className="😑">
                                Just Ok 😑
                            </option>

                            <option value="😠" className="😠">
                                Angry 😠
                            </option>

                            <option value="😧" className="😧">
                                Scared 😧
                            </option>
            
                            <option value="🙁" className="🙁">
                                Sad 🙁
                            </option>

                            <option value="😢" className="😢">
                                Really sad 😢
                            </option>
                        </select>
                    </div>
                    <div className={classes['new-mood-form-section']}>
          <label htmlFor="date">Select date:</label>

          <input
            id="date"
            type="date"
            defaultValue={date}
            onChange={dateChangeHandler}
          />
        </div>

        <div className={classes['new-mood-form-section']}>
          <textarea
            name="comment"
            id="comment"
            cols="33"
            rows="1"
            placeholder="Add a comment about your day (optional)"
            onChange={commentChangeHandler}
            value={enteredComment}
          ></textarea>
        </div>

        <div className={classes['new-mood-form-section']}>
          <Button type="submit">Add a new mood</Button>
        </div>
      </form>
    </div>
  );
};

export default MoodForm;

    