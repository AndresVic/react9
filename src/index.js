// Creando componentes
import React from "react"
import reactDom from "react-dom"
import 'bootstrap/dist/css/bootstrap.css'
import './css/main.css'

import Router from "./route/Router"

const contenido = <div className="container mt-4">

   <Router />

</div>

reactDom.render(contenido, document.getElementById('root'))