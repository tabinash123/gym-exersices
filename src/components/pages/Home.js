import React, { useState } from 'react';
import { Box } from '@mui/material';
import HeroBanner from '../HeroBanner';
import SearchExercises from '../SearchExercises';
import Exercises1 from '../Exercises';
import ExerciseDetail from './ExerciseDetail';


const Home = () => {

  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');
  


 
  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises1
        setExercises={setExercises}
        bodyPart={bodyPart}
        exercises={exercises}
      
      />
    </Box>
  );
}

export default Home