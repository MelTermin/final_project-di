import React from 'react'
import pic2 from '../images/pic2.jpeg'
import { RiHome4Line } from 'react-icons/ri';
import { BiSpreadsheet } from 'react-icons/bi';
import { MdFitnessCenter } from 'react-icons/md';
import { AiOutlineContacts} from 'react-icons/ai';
import { GoSignOut} from 'react-icons/go';
import {Link} from 'react-router-dom'
import app from '../firebase'
function SideNavBar() {
  return (
  
    <div className="sidebar"  >
       
          <ul className="nav-links" >
        
       <img className="logo" src={pic2}></img>

    
         <Link className="link" to="/" >
         <div style={{display: "flex", justifyContent: "space-between"}}>
            <RiHome4Line color="white"  size={22}/><li style= {{marginLeft:"10px"}}>Home</li>
        </div>
        </Link>

        <Link className="link" to="/form" >
         <div style={{display: "flex", justifyContent: "space-between"}}>
            <BiSpreadsheet  size={22}/><li style= {{marginLeft:"10px"}}>Add Measurements</li>
        </div>
        </Link>

      
        <Link className="link" to="/workout" >
         <div style={{display: "flex", justifyContent: "space-between"}}>
            <MdFitnessCenter  size={22}/><li style= {{marginLeft:"10px"}}>Workout</li>
        </div>
        </Link>
   
        <Link className="link" to="/contact" >
         <div style={{display: "flex", justifyContent: "space-between"}}>
            <AiOutlineContacts  size={22}/><li style= {{marginLeft:"10px"}}>Contact</li>
        </div>
        </Link>

        <Link className="link" to="/" >
         <div style={{display: "flex", justifyContent: "space-between"}}>
            <GoSignOut  size={22.6}/>  <li style= {{marginLeft:"10px"}}  onClick={() => app.auth().signOut()}Sign out> Signout </li>
        </div>
        </Link>
  

    </ul>
    
  
    </div>

  )
}

export default SideNavBar
  