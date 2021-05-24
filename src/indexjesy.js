// Creando componentes
import React from "react"
import reactDom from "react-dom"

// Carpeta CSS
import styles from './css/style.css'

// Imagenes
import img_utvt_logo from "./img/utvt-logo.png"
import jesy from "./img/jesy.jpeg"

const contenido = <div>
    <div class="container mt-4">
        <div class="card1">
            <div class="card">
                <img src={img_utvt_logo} alt="Logo" class="logo"/>
                <div>
                    <div class="row">
                        <div class="col">
                            <img src={jesy} alt="Dany" class="estudiante"/>
                        </div>
                        <div class="col-25">
                            <p class="negritas letra">Matricula:</p>
                        </div>
                        <div class="col-50 letra">
                            <p>221710133</p>
                        </div>
                        <div class="col-25">
                            <p class="negritas letra">Nombre:</p>
                        </div>
                        <div class="col-50 letra">
                            <p>Alma Jesica Bello Jiménez</p>
                        </div>
                        <div class="col-25">
                            <p class="negritas letra">Grupo:</p>
                        </div>
                        <div class="col-50 letra">
                            <p>IDGS-91</p>
                        </div>
                        <div class="col-25">
                            <p class="negritas letra">Fecha N.:</p>
                        </div>
                        <div class="col-50 letra">
                            <p>26/08/1998</p>
                        </div>
                        <div class="col-75">
                            <p class="cursiva letra2">Certificar que la persona mencionada anteriormente es estudiante de esta carrera.</p>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-75">
                            <p class="negritas padding-left letra2">Inscrita al 9° Cuatrimestre en el año 2021.</p>
                        </div>
                        <div class="col-25 padding-right">
                            <p class=" letra2">UTVT</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

reactDom.render(contenido, document.getElementById('root'))