
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from './Components/Home'
import Login from './Components/Login'
import Signup from './Components/Signup'
import Workout from './Components/Workout'
import Contact from './Components/Contact'
import Form from './Components/Form'
import { WorkoutContextProvider } from './context/WorkoutContext';
import {AuthProvider} from './Auth'
import PrivateRoute from './PrivateRoute';


function App() {
  return (
  
    <WorkoutContextProvider>
      <AuthProvider>
         <Router>
        <div  >
          <PrivateRoute exact path="/" component={Home} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/login" component={Login} />
          <Route path={["/form", "/tracker","/tracker/:id", "/tracker"]} exact component= {Form}/>
          <Route path={["/contact", "/contactform"]}  exact component= {Contact} />
          <Route path="/workout"  exact component= {Workout} />
          
        </div>
      </Router>
      </AuthProvider>
      </WorkoutContextProvider>

 
   
  );
}

export default App;
