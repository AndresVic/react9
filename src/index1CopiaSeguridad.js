// Creando componentes
import React from "react"
import reactDom from "react-dom"

import img_team from "./img/img_team.png"
import archivo_1 from "./files/horario.pdf"

import 'bootstrap/dist/css/bootstrap.css'
import './css/main.css'

import Datos01 from "./componentes/Datos01"

const text = "Informacion de un texto x";

const contenido = <div className="container mt-4">
    <h1>React: Inicio</h1>
    <img className="img mb-3" src={img_team} alt="Logo de un Equipo" />
    <br/>
    <img className="img mb-3" src="https://i.pinimg.com/originals/e2/ab/0a/e2ab0a2c07931b4c582dec61cc364abe.jpg" alt="Logo de un Equipo" />
    <br/>
    <a href={archivo_1} rel="noopener noreferrer" target="_blank">Archivo PDF</a>
    
    <hr/>
    <Datos01 texto={text} dato='| Contenido texto 2'/>
</div>

reactDom.render(contenido, document.getElementById('root'))