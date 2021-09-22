import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { IconButton, makeStyles } from '@material-ui/core'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';


const useStyles = makeStyles (theme => ({
    
    title: {
        flexGrow: 0.99
    },
    appBar: {
        width: `calc(100% - ${180}px)`,
        marginLeft: 190,
      },

}))

export const NavBar = () => {
    const classes = useStyles ()
    return (
        <div>
            <AppBar position="fixed" color="primary" className={classes.appBar}>
              <Toolbar>

                <Typography variant="h6" className={classes.title}>
                    Hospital TESI
                  
                </Typography>
                <IconButton color="inherit">
                <AccountCircleIcon />
                </IconButton>
                <Typography variant="h6">
                    Nombre del usuario

                </Typography>
               

              </Toolbar>
              
              
            </AppBar>
            </div>


        
    )
}
