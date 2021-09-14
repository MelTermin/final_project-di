import React, { useState, createContext } from "react";

export const WorkoutContext = createContext();

export const WorkoutContextProvider = (props) => {
  
  const [details,setDetails] = useState([]);
  
  const addWorkoutItem= (detail) => {
    setDetails([...details,detail])
  }
  
  return (
    <WorkoutContext.Provider
      value={{
        details:details,
        setDetails:setDetails,
        addWorkoutItem,   
      }}
    >
      {props.children}
    </WorkoutContext.Provider>
  );
};