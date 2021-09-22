import React from 'react'
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    spacing
    
} from '@material-ui/core'

import AddIcon from '@material-ui/icons/Add';
import InfoSharpIcon from '@material-ui/icons/InfoSharp';
import ReorderSharpIcon from '@material-ui/icons/ReorderSharp';
import PersonSharpIcon from '@material-ui/icons/PersonSharp';
import DescriptionSharpIcon from '@material-ui/icons/DescriptionSharp';








const Listas = () => {
    return (
        <div>
            <List component='nav'>
                
                <ListItem button> 
                <ListItemText primary='Añadir pacientes' style={{color: '#FFFFFF'}}/> 
                <ListItemIcon>
                  
                  < AddIcon color="secondary"/> 

                </ListItemIcon>
                </ListItem>
                <br />


                <ListItem button>
                <ListItemText primary='Reportes' style={{color: '#FFFFFF'}}/> 
                <ListItemIcon>
                  
                  <DescriptionSharpIcon color="secondary"/> 

                </ListItemIcon>
                </ListItem>
                <br />


                <ListItem button>
                <ListItemText primary='Generales' style={{color: '#FFFFFF'}}/>  
                <ListItemIcon>
                  
                  <InfoSharpIcon color="secondary"/> 

                </ListItemIcon>
                </ListItem>
                <br />


                <ListItem button> 
                <ListItemText primary='Cuenta' style={{color: '#FFFFFF'}}/> 
                <ListItemIcon>
                  
                  <ReorderSharpIcon color="secondary"/> 

                </ListItemIcon>
                </ListItem>
                <br />


                <ListItem button> 
                <ListItemText primary='Usuarios' style={{color: '#FFFFFF'}}/> 
                <ListItemIcon>
                  
                  <PersonSharpIcon color="secondary"/> 

                </ListItemIcon>
                
                </ListItem>







            </List>
        </div>
    )
}

export default Listas
