import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Inicio from './pages/Inicio'
import Admin from './pages/Admin'
const App = () => {

  return (
    <div className="container">
    <Router>
      <Switch>
        <Route exact path='/' component={Inicio}></Route>
        <Route path='/admin' component={Admin}></Route>
      </Switch>
    </Router>
  </div>
  );
}

export default App;