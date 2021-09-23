import React,{useState} from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import { createTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

const useStyles = makeStyles((theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: "#2F4050",
      border: '3px solid #8FD14F',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      color: "#FFFFFF",
      fontFamily:"sans-serif",
      fontSize: "90%",
    },
    input: {
        width: "97%",
        height: "25px",
        border: "0",
        outline: "none",
    },
    separacion:{
        marginLeft: "20%",
        padding:"2px 1em 0 15px",
    },
    tamañoboton:{
        padding:"2px 1em 0 15px",
    },
  }),
);
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

function Moda() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [setRespuesta] = useState("")
  const [correo,setCorreo]= useState("")
  console.log(correo)
  const obtenerUsuario=async(e)=>{ //async devuelve una promesa
    e.preventDefault()
    try{
    // const data = {correo};
    const url =`https://covit-app.herokuapp.com/api/email/forgotPassword?correo=${correo}` //esto es una promesa
    const fetchur = await fetch(url, {
      method: 'GET', 
      // body: JSON.stringify(data),
      headers:{
        'Content-Type': 'application/json'
      }
    })
    const datosRespuesta = await fetchur.json()  //esto es una promesa
    console.log(datosRespuesta)
    if (!url.ok){
      setRespuesta(datosRespuesta.errors[0].msg)
      throw Error(datosRespuesta.errors[0].msg) 
    }
    setRespuesta(datosRespuesta.err)
    }catch(e){
      console.log(e)
    }
  }

  return (
    <div>
      <button type="button" onClick={handleOpen}>
        react-transition-group
      </button>
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
              <form onSubmit= {(e)=>obtenerUsuario(e)}>
                <h2 id="transition-modal-title">Recuperación de contraseña</h2>
                <p id="transition-modal-description">Ingrese la dirección de correo<br/>electrónico  y le enviaremos un enlace<br/>para restablecer la contraseña.</p>
                <input onChange={(e)=>{setCorreo(e.target.value)}} className ={classes.input} placeholder=" Dirección de correo electrónico"/>
                <br/><br/><br/>
              <div>
                <ThemeProvider theme={theme}>
                    <Button variant="contained" color ="primary" className={classes.tamañoboton}onClick={handleClose}>Cancelar</Button>
                    <Button variant="contained" color="secondary"  type ="submit" className={classes.separacion}>Enviar email</Button>
                </ThemeProvider>
               </div>
            </form>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
export default Moda;
