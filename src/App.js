// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React, { useState } from 'react';
// import Home from './pages/home/Home';
// import Dashboard from './pages/dashboard/Dashboard';

import Header from './components/mood-tracker/UI/Header';
import Moods from './components/mood-tracker/Moods/Moods';
import NewMood from './components/mood-tracker/AddMood/NewMood';
import MonthTracker from './components/mood-tracker/Tracker/MonthTracker';

const App = () => {
  const sampleMoodsData = [];

  const defineStartedMoodsSeptember2021 = () => {
    for (let i = 1; i <= 31 + 2; i++) {
      if (i === 1 || i === 2 || i === 3) {
        starterMoods.push({
          date: '',
          mood: 'undefined',
          id: Math.random().toString(),
        });
      } else {
        let date = new Date();
        date.setDate(i - 3);
        date.setFullYear(2021);
        date.setMonth(9 - 1);

        starterMoods.push({
          date: date,
          mood: 'undefined',
          id: Math.random().toString(),
        });
      }
    }
  };

  const [moods, setMoods] = useState(sampleMoodsData);

  const starterMoods = [];
  defineStartedMoodsSeptember2021();

  const [moodsForTracker, setMoodsForTracker] = useState(starterMoods);

  const changeColorInTracker = (mood) => {
    let index = moodsForTracker.findIndex(
      (item) =>
        // TODO Compare dates without time
        item.date !== '' && item.date.getDate() === mood.date.getDate()
    );

    let updatedMoods = [...moodsForTracker];

    let newItem = { ...moodsForTracker[index] };

    newItem.mood = mood.mood;

    updatedMoods[index] = newItem;

    setMoodsForTracker(updatedMoods);
  };

  const addNewMoodHandler = (mood, replaced) => {
    if (replaced) {
      setMoods((prevMoods) => {
        return prevMoods.filter(
          (item) => item.date.toISOString() !== mood.date.toISOString()
        );
      });
    }

    setMoods((prevMoods) => [...prevMoods, mood]);

    setMoods((prevMoods) =>
      prevMoods.sort((a, b) => a.date.getDate() - b.date.getDate())
    );

    changeColorInTracker(mood);
  };

  const addMoodWithItemHandler = (date) => {
    const mood = {
      mood: '🙂',
      date: new Date(date),
      comment: '',
      color: '🙂',
      id: Math.random().toString(),
    };

    const found = moods.find(
      (item) => item.date.getDate() === mood.date.getDate()
    );

    addNewMoodHandler(mood, found);
  };

  return (
    <div>
      <Header />

      <div className="outside-container">
        <div>
          <NewMood onAddNewMood={addNewMoodHandler} />

          <Moods items={moods} />
        </div>

        <MonthTracker
          moods={moodsForTracker}
          addMoodWithItem={addMoodWithItemHandler}
        />
      </div>
    </div>
  );
};

// function App() {
//   return (
//     <div>
//       <MoodForm />
//     </div>
    // <div className="App">
    //   <Router>
    //     <Switch>
    //       <Route exact path='/' component={Home} />
    //       <Route path='/dashboard' component={Dashboard} />
    //     </Switch>
    //   </Router>
    // </div>
//   );
// }

export default App;
