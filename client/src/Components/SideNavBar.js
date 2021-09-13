import React from 'react'

import {Link} from 'react-router-dom'

function SideNavBar() {
  return (
  
    <div className="sidebar">
        <div >
   <ul className="nav-links">

   <Link className="link" to="/" >
     <li>Workout Tracker App</li></Link>

     <Link className="link" to="/form" >
     <li>Add Measurements</li></Link>
   
  
    <Link className="link" to="/workout" >
      <li>Workout</li>
    </Link>

    <Link className="link" to="/contact" >
      <li>Contact</li>
    </Link>

  
    
    </ul>
    
    </div>

    </div>
  

      
 
  )
}

export default SideNavBar
  