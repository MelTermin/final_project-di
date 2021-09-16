import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from '../firebase'
import { AuthContext } from "../Auth";
import { Link } from "react-router-dom"

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async event => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div className="login-component" >
        <form className="login-form" onSubmit={handleLogin}>
        <h1>Login</h1>
        <br></br>
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
        <button className="login-btn" type="submit">Log in</button>
      
      </form>
    </div>
  );
};

export default withRouter(Login);