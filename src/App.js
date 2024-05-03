import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Question from "./components/Add-Question/Question";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import Auth from './components/Auth'
import { useEffect } from "react";
import { auth } from "./firebase";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import StackOverflow from "./components/StackOverflow";
import ViewQuestion from  './components/ViewQuestion';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          login({
            uid: authUser.uid,
            photo: authUser.photoURL,
            displayName: authUser.displayName,
            email: authUser.email,
          })
        );
      } else {
        dispatch(logout());
      }
      // console.log(authUser);
    });
  }, [dispatch]);

  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        user ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/auth",
              state: {
                from: props.location,
              },
            }}
          />
        )
      }
    />
  );  

  return(
    <div className="App">
      <Router>
      <Header/> 
      <Switch>
        <Route exact path = '/auth' component = {Auth}/>
        <Route exact path = '/add-question' component = {Question}/>
        <PrivateRoute exact path = '/question' component = {ViewQuestion}/>
        <Route exact path = '/' component = {StackOverflow}/>
      </Switch>

      </Router>
    </div>
  );
}

export default App;
