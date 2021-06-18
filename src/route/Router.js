import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Datos01 from '../componentes/Datos01'
import Datos02 from '../componentes/Datos02'
import Datos03 from '../componentes/Datos03'
import Datos04 from '../componentes/Datos04'
import Lista from '../componentes/Lista'
import Form from '../componentes/Form00'
import Menu from '../componentes/Menu'

import Error from '../componentes/Error'

export default function Router(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Datos01}/>
                <Route exact path='/datos2' component={Datos02}/>
                <Route exact path='/datos3' component={Datos03}/>
                <Route exact path='/datos4' component={Datos04}/>
                <Route exact path='/lista' component={Lista}/>
                <Route exact path='/formulario' component={Form}/>
                <Route exact path='/menu' component={Menu}/>
                <Route component={ Error } />
            </Switch>
        </BrowserRouter>
    )
}