import React from 'react'
import {
    makeStyles,
    Drawer
} from '@material-ui/core'
import Listas from './Listas'



const estilos = makeStyles(theme =>({
    
    drawer: {
        width: 190,
        flexShrink: 0,
        
      },
      
      drawerPaper: {
        width: 180,
        background: '#2F4050'
      },
      
}))
const Cajon = () => {

    const classes = estilos()


    return (
        <Drawer 
          className={classes.drawer}
          variant="permanent"
          
          
            classes={{
                paper: classes.drawerPaper
            }}

           


            anchor="left"
        >
            <div ></div>
            

            <Listas />
           




        </Drawer>

      

    )
}

export default Cajon
