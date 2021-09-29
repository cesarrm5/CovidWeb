import React, {useState} from 'react';
import {useStyle, Form_datUser, Form_institucion, } from './Login.js';
import Grid from '@material-ui/core/Grid'
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'

export const Inicio = () => {
    const classes = useStyle();
    const [usuario, usuarioError] = useState({campo:"", valido: null});
    const [password, passwordError] = useState({campo:"", valido: null});
    const expresionesRegulares = {
        usuario: /^[a-zA-Z0-9\_\-]{6,16}$/, // Letras, numeros, guion y guion_bajo
        password: /^.{8,15}$/, // 8 a 15 digitos.
    }

    return (

        <main>
          <Grid container component='main' className={classes.root}>
            <Container className={classes.img}>

            </Container>

            <Container className={classes.login}>
            <Container className={classes.logo}></Container>

                    <form action = "" className={classes.logform} noValidate autoComplete="off" elevation='5'  maxWidth='xs'>
                        <Form_institucion/>

                        <Form_datUser
                          estado={usuario}
                          cambiarEstado={usuarioError}
                          label="Usuario"
                          type="text"
                          name="usuario"
                          expresionRegular={expresionesRegulares.usuario}
                        />

                        <Form_datUser
                          estado={password}
                          cambiarEstado={passwordError}
                          label="Password"
                          type="password"
                          name="password"
                          expresionRegular={expresionesRegulares.password}
                        />
                        {/* <TextField id="filled-basic" className={classes.textf} label="Password" type="password" variant="filled" /> */}
                        <Button className={classes.btn } variant="outlined" margin="center">Enviar</Button>
                    </form>     
                    <Link to='/recuperar' style={{ textDecoration: 'none' }} >
                      <Button className={classes.recuperar_pass} color="primary">¿Olvidaste tu contraseña?</Button>
                    </Link>
            </Container>
        </Grid>
    </main>
    )
}


export default Inicio;
