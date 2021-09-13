import React, { useCallback } from "react";
import { withRouter } from "react-router";
import app from "../firebase";
import pic1 from '../images/pic1.jpeg'
import { Link } from "react-router-dom"
import { FaFacebook,FaYoutube } from 'react-icons/fa';
import {SiInstagram} from 'react-icons/si';




const SignUp = ({ history }) => {
  const handleSignUp = useCallback(async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      history.push("/");
    } catch (error) {
      alert(error);
    }
  }, [history]);

  return (
    <div className="signup-container">
    <div className="signup-row">
      <img className="image" src={pic1}></img>

      <div className="sign-up-column">
         
        <form className="form" onSubmit={handleSignUp}>
          <h1 className="sign-up-text">Sign up</h1>
          <br></br>
        <label>
          Email
          <input name="email" type="email" placeholder="Email" />
        </label>
        <label>
          Password
          <input name="password" type="password" placeholder="Password" />
        </label>
        <br></br>
        <br></br>
        <button className="btn" type="submit">Sign Up</button>
        <br></br>
        <br></br>
        <div >
        Need an account? <Link to="/login">Log in</Link>
      </div>
      <div className="social-media">
        <FaFacebook size={32}></FaFacebook>
        <SiInstagram size={32}></SiInstagram>
        <FaYoutube size={32}></FaYoutube>
        </div>
      </form>
     
    </div> 
    
    </div>

    </div>
  );
};

export default withRouter(SignUp);