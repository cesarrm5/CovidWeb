import React from 'react'
import {
    makeStyles
} from '@material-ui/core'
import  {NavBar} from './NavBar'
import Cajon from './Cajon'
import Grafica from './Grafica'
import Grafica2 from './Grafica2'

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

const Contenedor = () => {
    const classes = estilos ()
    return (
        <div className={classes.root}>
            
            <NavBar />
            <Cajon />
            <div>
              <hr style={{
                backgroundColor: '#8FD14F',
                height: 8

            }}/>


              </div>

            <div className={classes.content}>
                <div className={classes.toolbar}></div>
                
               <div id='grafica'>
               <grafica />
                         


               </div>


               <div id='grafica2'>
               <grafica2 />
                         


               </div>
               

                


            </div>
            
        </div>
    )
}

export default Contenedor
