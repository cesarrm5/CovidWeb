import React from 'react'
import {
    makeStyles
} from '@material-ui/core'
import  {NavBar} from './NavBar'
import Cajon from './Cajon'




const estilos = makeStyles (theme => ({
    root: {
        display: 'flex'
    },

    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: "0.99",
        backgroundColor: theme.palette.background,
        
      },
      espacio: {

        
        marginLeft: "1%"
      }

}))

const Contenedor = () => {
    const classes = estilos ()
    return (
        
        <div className={classes.root}>
             
             
            <NavBar />

            <div className={classes.toolbar}>
                <hr style={{backgroundColor: '#8FD14F',  width: "2002px", height: 65}} />
            </div> 
            
            <Cajon />
            

            
            
        </div>
    )
}

export default Contenedor
