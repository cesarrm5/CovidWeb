import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider, createTheme} from '@material-ui/core/styles';

import App from './App';


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
  </React.StrictMode>,
  document.getElementById('root')
);