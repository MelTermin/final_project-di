import React from 'react'
import {useState,useEffect,useContext} from 'react'
import Background from './Background'
import ProgressChart from './ProgressChart'
import {WorkoutContext} from '../context/WorkoutContext'
import axios from 'axios'


function ListItem() {

const {details,setDetails}=useContext(WorkoutContext)
const [modalIsOpen, setModalIsOpen]=useState(null);
const [exercise, setExercise]= useState("")
const [repetition,setRepition]=useState("")
const [weight,setWeight]=useState("")
const [date,setDate]=useState("")
const [duration,setDuration]=useState("")

useEffect (()=> {
 axios.get("http://localhost:4000/tracker").then(response=> {
   console.log(response)
   setDetails(response.data.data.trackerItem)
 })
}, []);

const handleDelete = (id) => {
  try {
    axios.delete(`http://localhost:4000/tracker/${id}`)
    .then(response=> {
      console.log(response)
      setDetails(
        details.filter((item) => {
          return item.id !== id;
        })
      );
     
    })
  }catch(err) {

  }
}

const handleEdit= async (id) => {
  console.log(id)

  axios.put(`http://localhost:4000/tracker/${id}`, {
    exercise,repetition,weight,duration,date
  }).then (response=> {
    console.log(response)
    
  })

  const newList= details.map((item) => {
    if (item.id === id) {
      item.exercise = exercise;
      item.repetition = repetition;
      item.duration = duration;
      item.weight = duration;
      item.date=date

  }
      return item;
  });
      setDetails(newList)
      setWeight("")
      setDuration("")
      setExercise("")
      setRepition("")
      setDate("")
      setModalIsOpen(null)
}

  
  return (
    <div className="items">
      <h1>Workout Tracker Item</h1>

        <div  >
          { details.map((item) => (
            <div   key={item.id}>
              {modalIsOpen===item.id ? (
                <div className="edit-container"  >
                  <form  className="edit-form" >
                    <h3>Edit Form</h3>
                    <label>Exercise:</label>
                    <input   type="text" value={exercise} name="exercise"  onChange={(e) => setExercise(e.target.value)} placeholder="Exercise" ></input>

                    <label>Repetition:</label>
                    <input   name="repetition"
                    value={repetition} onChange={(e) => setRepition(e.target.value)} placeholder="Repetition" ></input>
      
                    <label>Current Weight:</label>
                    <input type="number" value= {weight} name="weight" onChange={e => setWeight(e.target.value)} placeholder="Weight" ></input>

                    <label>Duration:</label>
                    <input type="number" value= {duration} name="duration" onChange={e => setDuration(e.target.value)} placeholder="Duration" ></input>

                    <label>Date:</label>
                    <input type="date" value={date} name="date" onChange={e => setDate(e.target.value)}></input>
                    
                    <button className="btn-submit"  type="submit" onClick={() => handleEdit(item.id)} > Submit</button>

                  
                  </form>
                  <Background></Background>
                </div>): (
            <div className="details-container" >
        
            <div className="item" >
              <div>{item.exercise}</div>
              <div>{item.repetition} rep</div>
              <div>{item.weight} kg</div>
              <div>{item.duration} min</div>
              <div>{new Date (item.date).toLocaleDateString("en-US")}</div>
              <div><button className="delete-btn" type="button"  onClick={() => handleDelete(item.id)}>Delete </button></div>
              <div><button className="delete-btn" type="button" onClick= {() =>setModalIsOpen(item.id)} >Edit </button>
              </div>
            </div>
       
            </div>)
            }
          </div>
            ))}
        </div>
        <ProgressChart></ProgressChart>
    </div>
  )
}

export default ListItem