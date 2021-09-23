import React from 'react'
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    makeStyles
    
} from '@material-ui/core'

import AddIcon from '@material-ui/icons/Add';
import InfoSharpIcon from '@material-ui/icons/InfoSharp';
import ReorderSharpIcon from '@material-ui/icons/ReorderSharp';
import PersonSharpIcon from '@material-ui/icons/PersonSharp';
import DescriptionSharpIcon from '@material-ui/icons/DescriptionSharp';
import logo from './nodejs.png';


const estilos = makeStyles (theme => ({
  separacion: {
    marginTop: "25%",
    marginLeft: "8%"
  },
  
  divicion: {
    marginLeft: "45%"
  },

  espacio: {

    marginTop: "10%",
    marginLeft: "8%"
  }

}))


    


const Listas = () => {
  const classes=estilos();
    return (
        <div>
            <List component='nav'>
              
            <img  src={logo} style={{ width: "90px", padding: "20px", marginLeft: "14px", marginTop: "-17px"}} alt="logo de la app"  />

              
                
            <div className={classes.espacio}> 
                <ListItem button >

                <ListItemText primary='Añadir pacientes' style={{color: '#FFFFFF'}}/> 
                
                <ListItemIcon >
                  
                  < AddIcon color="secondary" className={classes.divicion}/> 

                </ListItemIcon>
                </ListItem>
                </div>

               
               
                <div className={classes.separacion}> 
                <ListItem button >
                <ListItemText primary='Reportes' style={{color: '#FFFFFF'}}/>
                
                <ListItemIcon>
                  
                  <DescriptionSharpIcon color="secondary" className={classes.divicion}/> 

                </ListItemIcon>
                </ListItem>
                </div>

                <div className={classes.separacion}> 
                <ListItem button>
                <ListItemText primary='Generales' style={{color: '#FFFFFF'}}/>  
                <ListItemIcon>
                  
                  <InfoSharpIcon color="secondary" className={classes.divicion}/> 

                </ListItemIcon>
                </ListItem>
                </div>
               

                <div className={classes.separacion}> 
                <ListItem button> 
                <ListItemText primary='Cuenta' style={{color: '#FFFFFF'}}/> 
                <ListItemIcon>
                  
                  <ReorderSharpIcon color="secondary" className={classes.divicion}/> 

                </ListItemIcon>
                </ListItem>
                </div>

                <div className={classes.separacion}> 
                <ListItem button> 
                <ListItemText primary='Usuarios' style={{color: '#FFFFFF'}}/> 
                <ListItemIcon>
                  
                  <PersonSharpIcon color="secondary" className={classes.divicion}/> 

                </ListItemIcon>
                
                </ListItem>
                </div>






             
            </List>
            
        </div>
    )
}

export default Listas
