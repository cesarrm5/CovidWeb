import React, {useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Inicio from './pages/Inicio'
import Admin from './pages/Admin'
import Recuperar from './componentes/recuperar.jsx'
import Moda from './componentes/modal.jsx'
import Correcto from './componentes/correcto'

const App = () => {

  return (
    <div className="container">
    <Router>
      <Switch>
        <Route exact path='/' component={Inicio}></Route>
        <Route path='/admin' component={Admin}></Route>
        <Route path='/recuperar' component={Recuperar}></Route>
        <Route path='/moda' component={Moda}></Route>
        <Route path='/correcto' component={Correcto}></Route>
      </Switch>
    </Router>
  </div>
  );
}

export default App;
