import * as React from 'react'

import './App.css';
import { Link } from 'react-router-dom';
import { allExercises } from './exercises';

function App() {
  return (
    <div className="App">
      <h1 className='title'>Simple React Exercises</h1>
      {
        allExercises.map(exercise => (
          <div key={exercise.id} className='exercises-container'>
            <Link to={exercise.route} className='exercise-box'>
              <div>
                {exercise.id} : {exercise.name}
              </div>        
            </Link>       
          </div>
        ))
      }
      
    </div>
  );
}

export default App;
