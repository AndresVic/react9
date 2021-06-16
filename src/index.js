// Creando componentes
import React from "react"
import reactDom from "react-dom"
import 'bootstrap/dist/css/bootstrap.css'
import './css/main.css'

import Datos01 from "./componentes/Datos01"

const contenido = <div className="container mt-4">

   <Datos01 />

</div>

reactDom.render(contenido, document.getElementById('root'))