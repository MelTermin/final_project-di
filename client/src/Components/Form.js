import React from 'react'
import SideNavBar from './SideNavBar'
import ListItem from './ListItem'
import {useState,useContext} from 'react'
import {WorkoutContext} from '../context/WorkoutContext'
import axios from 'axios';

function Form() {

const {addWorkoutItem}=useContext(WorkoutContext)

const [exercise, setExercise]= useState("")
const [repetition,setRepition]=useState("")
const [weight,setWeight]=useState("")
const [duration,setDuration]=useState("")


const handleSubmit = (e)=> {
  e.preventDefault()
  axios.post("http://localhost:4000/tracker", {
    exercise,repetition,weight,duration
  }).then (response=> {
    console.log(response)
    addWorkoutItem(response.data.data.trackerItem)
  })
  setWeight("")
  setDuration("")
  setExercise("")
  setRepition("")
}
  return (
    
    <div className="page-wrapper">
    <SideNavBar></SideNavBar>
    <div className="main">
      <form className="workout-details-form">
      <h1>Form</h1>
        
        <label>Name of exercise:</label>
        <input type="text" value= {exercise}  name="exercise"onChange={e => setExercise(e.target.value)} placeholder="Please type a exercise " ></input>

        <label>Number of repetition:</label>
        <input type="number" value= {repetition} name="repetition" onChange={e => setRepition(e.target.value)} placeholder="Repetition " ></input>

        <label>Current Weight:</label>
        <input type="number" value= {weight} name="weight" onChange={e => setWeight(e.target.value)} placeholder="Weight" ></input>

        <label>Duration:</label>
        <input type="number" value= {duration} name="duration" onChange={e => setDuration(e.target.value)} placeholder="Duration" ></input>

        <button onClick= {handleSubmit} >ADD</button>
      </form>

      <ListItem></ListItem>
    </div>
   </div>
  )
}

export default Form