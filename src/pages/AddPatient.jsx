import React from 'react'
import {ThemeProvider} from'@material-ui/core/styles'
import Contenedor from '../componentes/Contenedor'
import theme from './temaConfig'

import {
    makeStyles
} from '@material-ui/core'
import  {NavBar} from '../componentes/NavBar'
import Cajon from '../componentes/Cajon'

const estilos = makeStyles (theme => ({
    root: {
        display: 'flex'
    },

    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background,
        
      },

}))



const AddPatient = () => {
    const classes = estilos ()
    return (
        <div>
            <ThemeProvider theme={theme}>
            <div className={classes.root}>
                <NavBar />
                <Cajon />
                <div className={classes.content}>
                    <hr size="65" width="200%" align="center" color='#8FD14F'/>
                    <div className={classes.toolbar}></div>
                    <div>
                        <h2>AÑADIR PACIENTES</h2>
                    </div>
                </div>
            </div>
            </ThemeProvider>
        </div>
    )
}

export default AddPatient

