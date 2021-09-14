import React from 'react'
import {useState,useEffect,useContext} from 'react'
import Background from './Background'
import {WorkoutContext} from '../context/WorkoutContext'
import axios from 'axios'


function ListItem() {

const {details,setDetails}=useContext(WorkoutContext)
const [modalIsOpen, setModalIsOpen]=useState(null);
const [exercise, setExercise]= useState("")
const [repetition,setRepition]=useState("")
const [weight,setWeight]=useState("")
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
    exercise,repetition,weight,duration
  }).then (response=> {
    console.log(response)
    
  })

  const newList= details.map((item) => {
    if (item.id === id) {
      item.exercise = exercise;
      item.repetition = repetition;
      item.duration = duration;
      item.weight = duration;

  }
      return item;
  });
      setDetails(newList)
      setWeight("")
      setDuration("")
      setExercise("")
      setRepition("")
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

                    <button className="btn-submit"  type="submit" onClick={() => handleEdit(item.id)} > Submit</button>
                  </form>
                  <Background></Background>
                </div>): (
            <div  >
              <table>
                <tr>
              <th>Exercise</th>
              <th>Repetition</th>
              <th>Weight</th>
              <th>Duration</th>
              <th>Edit</th>
              <th>Delete</th>
                </tr>
         
            {details.map((item) => {
              return (
                <tr>
               <td>{item.exercise}</td>
              <td>{item.repetition} rep</td>
              <td>{item.weight} kg</td>
              <td>{item.duration} min</td>
              <td><button className="delete-btn" type="button"  onClick={() => handleDelete(item.id)}>Delete </button></td>
              <td><button className="delete-btn" type="button" onClick= {() =>setModalIsOpen(item.id)} >Edit </button>
              </td>
           </tr>
              )
            })}

      
        </table>
              
            </div>
            )
            }
          </div>
            ))}
        </div>
    </div>
  )
}

export default ListItem