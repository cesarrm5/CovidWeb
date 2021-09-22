
import {ThemeProvider} from'@material-ui/core/styles'
import Contenedor from './componentes/Contenedor'
import theme from './temaConfig'
import Grafica from './componentes/Grafica'
import Grafica2 from './componentes/Grafica2'


function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
              <hr style={{
                backgroundColor: '#8FD14F',
                height: 8

            }}/>
            <Contenedor />
            


              </div>
    
      
      
      
      


     

     
    
       

      
     
    </ThemeProvider>
  );
}

export default App;
