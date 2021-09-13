import React from 'react'
import app from '../firebase'
import SideNavBar from './SideNavBar'
import {Link} from 'react-router-dom'

function Home() {
  return (
    <div className="main-page-wrapper">
     
      <SideNavBar></SideNavBar>
      
      <div>
      <div className="signout"> <button onClick={() => app.auth().signOut()}>Sign out</button> </div>
      <h1>Node.js Weight Tracker with Postgres SQL & React</h1>
      <div>Welcome to the Weight Tracker and Fitness Workout sample project!</div>
      <div>Add a <Link  to="/form" >
      weight measurement </Link> or find a <Link  to="/workout" >
      workout according to your need!</Link>
      </div>
    </div>
    
     
    </div>
  )
}

export default Home