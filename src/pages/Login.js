import React from 'react';
import {makeStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import login_img from '../login_img.png'
import logo_img from '../logo.png'



// function Log__in() {

//   const [currency, setCurrency] = React.useState('EUR');
//   const classes = useStyle()
//   const handleChange = (event) => {
//     setCurrency(event.target.value);
//   };

//   return (
    // <Grid container component='main' className={classes.root}>
    //     <Container className={classes.img}>

    //     </Container>
            
    //     <Container className={classes.login}>
    //     <Container className={classes.logo}></Container>
    //             <form className={classes.logform} noValidate autoComplete="off" elevation='5'  maxWidth='xs'>
    //                 <TextField className={classes.desp}
    //                     id="outlined-select-currency-native"
    //                     select
    //                     label="Institución"
    //                     value={currency}
    //                     onChange={handleChange}
    //                     SelectProps={{
    //                       native: true,
    //                     }}
    //                     helperText="Please select your currency"
    //                     variant="outlined"
    //                   >
    //                     {currencies.map((option) => (
    //                       <option key={option.value} value={option.value}>
    //                         {option.label}
    //                       </option>
    //                     ))}
    //                 </TextField>
    //                 <TextField id="filled-basic" className={classes.textf} label="Usuario" variant="filled" />
    //                 <TextField id="filled-basic" className={classes.textf} label="Password" type="password" variant="filled" />
    //                 <Button className={classes.btn } variant="outlined" margin="center">Enviar</Button>
    //             </form>
    //             <Button className={classes.recuperar_pass} color="primary">¿Olvidaste tu contraseña?</Button>

    //     </Container>
    // </Grid>
//   );
// }


const Form_datUser = ({estado, cambiarEstado, label, type, name, expresionRegular}) => {

  
  const classes = useStyle()

  const onChange = (e) => {
    cambiarEstado({...estado, campo: e.target.value})
  }
 
  const validacion = () => {
    if(expresionRegular){
      if(expresionRegular.test(estado.campo)){
        cambiarEstado({...estado, valido: 'true'})
        console.log("correcto");
      }
      else{
        cambiarEstado({...estado, valido: 'false'})
        console.log("incorrecto");
      
      }

    }
  } 

  return (
      <TextField 
          
          id={name} 
          className={classes.textf}
          label={label}
          type={type}
          variant="filled"
          value={estado.campo}
          onChange={onChange}
          onKeyup={validacion}
          onBlur={validacion}
          valido={estado.valido}
          // helperText="Incorrect entry."

        />  
  );
}

export {Form_datUser};

const currencies = [
  {
    value: 'USD',
    label: 'TEMA',
  },
  {
    value: 'EUR',
    label: 'Institución',
  },
  {
    value: 'BTC',
    label: 'TESCHA',
  },
  {
    value: 'JPY',
    label: 'TEC',
  },
];


const Form_institucion = () => {

  const [currency, setCurrency] = React.useState('EUR');
  const classes = useStyle()
  
  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <TextField className={classes.desp}
      id="outlined-select-currency-native"
      select
      label="Institución"
      value={currency}
      onChange={handleChange}
      SelectProps={{
        native: true,
      }}
      helperText="Seleccione su institución"
      variant="outlined"
  >
      {currencies.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </TextField>    
  );
}

export {Form_institucion};



const useStyle = makeStyles((theme) => ({

  root: {
    background: '#2F4050',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',

  },

  img: {
    height: '100vh',
    width: '40%',
    position: 'static',

    backgroundImage: `url(${login_img})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },

  logo: {
    backgroundImage: `url(${logo_img})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    height: '30vh',
    width: '60%',
    position: 'relative',
    marginTop: '10%'

  },

  login: {
    height: '100vh',
    width: '60%',
    position: 'static',
    marginTop: '0%',
    display: 'table-cell',
    verticalAlign: 'middle',
  },


  logform: {
    height: '50%',
    width: '38%',
    marginTop: '0%',
    marginLeft: '30%',


    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },

  textf: {
    width: '100%',
    color: 'white !important',
    // background: 'rgba(143, 209, 79, 0.3)',
    border: '1px solid rgba(143, 209, 79, 1)',


    
  },

  btn: {
    border: '1px solid rgba(143, 209, 79, 1)',
    color: '#8FD14F',
    width: '100%',
  },

  desp: {
    width: '100%',
    color: 'white !important',
    // border: '1px solid rgba(143, 209, 79, 1)',
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },

  recuperar_pass: {
      // positión: 'absolute'
      display: 'block',
      position: 'relative',
      bottom: '70px',
      marginLeft: 'auto',
      marginRight: 'auto',
  }

}));

export {useStyle};