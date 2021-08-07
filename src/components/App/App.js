import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import Login from '../Login/Login';
import NotFound from '../NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/signup">
            <Register/>
        </Route>

        <Route exact path="/">
          <Main/>
        </Route>

        <Route path="/signin">
            <Login/>
        </Route>
        
        <Route path="/movies">
          <Movies/>
        </Route>

        <Route path="/saved-movies">
          <Movies/>
        </Route>
        
        <Route path="/profile">
          <Profile/>
        </Route>

        <Route >
          <NotFound/>
        </Route> 
      </Switch>
    </div>
  );
}

export default App;
