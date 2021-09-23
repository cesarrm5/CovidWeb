import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { createTheme } from '@material-ui/core/styles';
import FilledInput from '@material-ui/core/FilledInput';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { ThemeProvider } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    backgroundColor: "#2F4050",
    color: "#FFFFFF",
    border: '3px solid #8FD14F',
    textAlign: "center",
  },
    
  input: {
    width: "97%",
    height: "50%",
    border: "0",
    outline: "none",
  },
  back:{
    backgroundColor: "#2F4050",
    margin: " auto",
    
  },
});
const theme = createTheme({
  palette: {
    primary: {
      main: '##E6E6E6',
      contrastText: '#2F4050',
    },
    secondary: {
      main: '#8FD14F',
      contrastText: '#2F4050',
    },
  },
});
function Recuperar() {
  const classes = useStyles();
  //values
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
    //values
    const [values2, setValues2] = React.useState({
      amount: '',
      password: '',
      weight: '',
      weightRange: '',
      showPassword: false,
    });
    const handleChange2 = (prop) => (event) => {
      setValues2({ ...values2, [prop]: event.target.value });
    };
    const handleClickShowPassword2 = () => {
      setValues2({ ...values2, showPassword: !values2.showPassword });
    };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleMouseDownPassword2 = (event) => {
    event.preventDefault();
  };

  return (
    <div>
    <Card className={classes.root}>
      <CardContent>
      <ThemeProvider theme={theme}>
        <Typography variant="h4" component="h2">
          Recuperaremos tu contraseña
        </Typography>
        <br/>
        <Typography variant="h6" component="p">
          Introduce una nueva contraseña.
        </Typography>
        <br/>
        <div>
        <FormControl variant="filled">
          <InputLabel style={{color:"#8FD14F"}} htmlFor="filled-adornment-password">Contraseña</InputLabel>
          <FilledInput style={{color:"#FFFFFF"}}
            id="filled-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                  color="secondary"
                >
                  {values.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        </div>
        <br/><br/>
        <Typography variant="h6" component="p">
          Confirma tu nueva contraseña.
        </Typography>
        <br/>
        <div>
        <FormControl variant="filled">
          <InputLabel style={{color:"#8FD14F"}} htmlFor="filled-adornment-password">confirma la contraseña</InputLabel>
          <FilledInput style={{color:"#FFFFFF"}}
            id="filled-adornment-password"
            type={values2.showPassword ? 'text' : 'password'}
            value={values2.password}
            onChange={handleChange2('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword2}
                  onMouseDown={handleMouseDownPassword2}
                  edge="end"
                  color="secondary"
                >
                  {values2.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
          <br/>
            <Button variant="contained" color="secondary"  type ="submit" className={classes.separacion}>Enviar email</Button>
        </FormControl>
      </div>
      </ThemeProvider>
      </CardContent>
    </Card>
    </div>
  );
}
export default Recuperar
