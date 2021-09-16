import React from 'react'
import SideNavBar from './SideNavBar'
import {useState} from 'react'
import emailjs from 'emailjs-com';
import Result from './Result';
import axios from 'axios'

function Contact() {

  const [firstname, setFirstName]=useState("");
  const [lastname, setLastName]=useState("");
  const [email, setEmail]=useState("");
  const [message,setMessage]=useState("")
  const [isSent ,setIsSent]=useState(false)

  const handleSubmit= (e)=> {
    e.preventDefault();
    emailjs.sendForm('service_ji1fajk', 'template_qw4gkjw', e.target, "user_JdMRQWpjtB3CuM8dRJkjN")
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });

    axios.post("http://localhost:4000/contactform", {
    firstname,lastname,email,message
    }).then (response=> {
      console.log(response)
      
    })
    setFirstName("")
    setLastName("")
    setEmail("")
    setMessage("")
    setIsSent(true)
    
  }
  
  setTimeout(()=>{
    setIsSent(false)
  },6000)
  return (
    <div className="main-page-wrapper">
     <SideNavBar></SideNavBar>
     <div className="main">

     <div class="contact-box">
     <div class="left"></div>
     <div class="right">
        <form onSubmit= {handleSubmit}>
        <h3>SEND US A MESSAGE</h3>
        <br></br>
        <label>First Name:</label>
        <input className="field" type="text" value= {firstname}  name="firstname"onChange={e => setFirstName(e.target.value)} ></input>

        <label>Last Name:</label>
        <input className="field" type="text" value= {lastname} name="lastname" onChange={e => setLastName(e.target.value)}></input>

        <label>Email:</label>
        <input className="field" type="text" value= {email} name="email" onChange={e => setEmail(e.target.value)}></input>

        <label>Message:</label>
        <textarea  className="field" type="text" value= {message} name="message" onChange={e => setMessage(e.target.value)}></textarea>
        
        <br></br>
        <div >{isSent ? <Result />:null}</div>
        <br></br>
        <button className="contact-btn" type="submit"   >Send</button>
        
        </form> 
			</div>
      </div>

   
     </div>
    </div>
  )
}

export default Contact