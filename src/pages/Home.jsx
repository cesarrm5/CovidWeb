import React from 'react'
import {ThemeProvider} from'@material-ui/core/styles'
import Contenedor from '../componentes/Contenedor'
import theme from './temaConfig'

const Home = () => {

    return (
        <div>
            <ThemeProvider theme={theme}>
                <Contenedor/>
            </ThemeProvider>
        </div>
    )
}

export default Home
