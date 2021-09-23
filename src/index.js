import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider, createTheme} from '@material-ui/core/styles';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const theme = createTheme({
  palette: {
    primary: {
      main: '#4caf50'
    },

    secondary: {
      main: '#4caf50'
    }
  }

})


ReactDOM.render(
    <React.StrictMode>
    <App />
  ,document.getElementById('root')
);


reportWebVitals();
