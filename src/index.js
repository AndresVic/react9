// Creando componentes
import React from "react"
import reactDom from "react-dom"

import img_cuervos from "./img/cuervos.jpg"
import img_utvt_logo from "./img/utvt-logo.png"

const contenido = <div>
    <img src={img_cuervos} alt="Logo de los Cuervos UTVT" /> 
    <img src={img_utvt_logo} alt="Logo de UTVT" />
    <br/>
</div>

reactDom.render(contenido, document.getElementById('root'))