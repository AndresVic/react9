// Creando componentes
import React from "react"
import reactDom from "react-dom"

import img_team from "./img/img_team.png"
import archivo_1 from "./files/horario.pdf"

const contenido = <div>
    <img src={img_team} alt="Logo de un Equipo" />
    <img src="https://i.pinimg.com/originals/e2/ab/0a/e2ab0a2c07931b4c582dec61cc364abe.jpg" alt="Logo de un Equipo" />
    <br/>
    <a href={archivo_1} rel="noopener noreferrer" target="_blank">Archivo PDF</a>
</div>

reactDom.render(contenido, document.getElementById('root'))