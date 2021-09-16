import React, { useState, createContext } from "react";

export const WorkoutContext = createContext();

export const WorkoutContextProvider = (props) => {
  
  const [details,setDetails] = useState([]);
  const [workoutDetails,setWorkOutDetails]=useState([])

  
  const addWorkoutItem= (detail) => {
    setDetails([...details,detail])
  }
  const searchWorkout=(item) => {
    setWorkOutDetails([...workoutDetails,item])
  }
  
  return (
    <WorkoutContext.Provider
      value={{
        details:details,
        setDetails:setDetails,
        addWorkoutItem,  
        workoutDetails:workoutDetails,
        setWorkOutDetails:setWorkOutDetails,
        searchWorkout
      }}
    >
      {props.children}
    </WorkoutContext.Provider>
  );
};