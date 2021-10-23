import MoodForm from './MoodForm';

const NewMood = (props) => {
  const saveNewMoodHandler = (mood, replaced) => {
    props.onAddNewMood(mood, replaced);
  };

  return <MoodForm onSaveNewMood={saveNewMoodHandler} />;
};

export default NewMood;