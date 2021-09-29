import React from 'react'
import {
    makeStyles,
    Drawer
} from '@material-ui/core'
import Listas from './Listas'



const estilos = makeStyles(theme =>({
    
    drawer: {
        width: "13.2%",
        flexShrink: 0,
        border: "none",
        
      },
      
      drawerPaper: {
        width: "175px",
        background: '#2F4050',
        border: "none",
    
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
        >
            <div ></div>
            <Listas />
        </Drawer>

      

    )
}

export default Cajon
