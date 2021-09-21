import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { IconButton, makeStyles } from '@material-ui/core'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SettingsIcon from '@material-ui/icons/Settings';






const useStyles = makeStyles (theme => ({
    
    title: {
        flexGrow: 0.99,
        fontSize: "200%",
        

    },
    appBar: {
        width: `calc(100% - ${170}px)`,
        marginLeft: 170,
        boxShadow: "none",
       
      },
      tamaño: {
          fontSize: "200%"

      },
      tamaño2: {
        fontSize: "135%",
        marginLeft: "130%"

      }

}))

export const NavBar = () => {
    const classes = useStyles ()
    return (
        <div>
            
            

            <AppBar position="fixed" color="primary" className={classes.appBar} >
              <Toolbar >

                <Typography variant="h6" className={classes.title}>
                    Hospital TESI
                  
                </Typography>

                <IconButton color="inherit">
                <AccountCircleIcon className={classes.tamaño}/>
               
    
                </IconButton>

                <Typography variant="h6">
                    Nombre del usuario

               </Typography>
                <IconButton color="inherit">
                <SettingsIcon className={classes.tamaño2}/>
                
                </IconButton>
                
               

              </Toolbar>
              
              
            </AppBar>
            
            


          
           
            </div>
            
            


        
    )

}
