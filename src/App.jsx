import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Inicio from './pages/Inicio'
import AddPatient from './pages/AddPatient'
import Reports from './pages/Reports'
import Home from './pages/Home'
import General from './pages/General'
import Settings from './pages/Setting'
import Users from './pages/Users'

import Recuperar from './componentes/recuperar.jsx'
import Moda from './componentes/modal.jsx'
import Correcto from './componentes/correcto'



const App = () => {

  return (
    <div className="container">
    <Router>
      <Switch>
        <Route exact path='/' component={Inicio}></Route>
        <Route path='/home' component={Home}></Route>
        <Route path='/addpatient' component={AddPatient}></Route>
        <Route path='/reports' component={Reports}></Route>
        <Route path='/general' component={General}></Route>
        <Route path='/settings' component={Settings}></Route>
        <Route path='/user' component={Users}></Route>
        <Route path='/recuperar' component={Recuperar}></Route>
        <Route path='/moda' component={Moda}></Route>
        <Route path='/correcto' component={Correcto}></Route>
      </Switch>
    </Router>
  </div>
  );
}

export default App;
