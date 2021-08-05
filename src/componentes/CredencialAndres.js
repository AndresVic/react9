// Creando componentes
import React from "react"

// Imagenes
import img_utvt_logo from "../img/utvt-logo.png"
import img_andresv from "../img/andresv.jpeg"
// Carpeta CSS
import '../css/style.css'
import Menu from "../componentes/Menu"

export default class Credencial extends React.Component{
    render(){
        return(
            <div className="container d-flex justify-content-center">
                <div className="container-crendencial mt-4">
                    <Menu />
                    <div className="card1">
                        <div className="card2">
                            <img src={img_utvt_logo} alt="Logo" className="logoC"/>
                            <div>
                                <div className="rowC">
                                    <div className="colC">
                                        <img src={img_andresv} alt="Andres" className="estudianteC"/>
                                    </div>
                                    <div className="col-25C">
                                        <p className="negritasC letraC">Matricula:</p>
                                    </div>
                                    <div className="col-50C letraC">
                                        <p>221811724.</p>
                                    </div>
                                    <div className="col-25C">
                                        <p className="negritasC letraC">Nombre:</p>
                                    </div>
                                    <div className="col-50C letraC">
                                        <p>A. Andres Victoriano Jimenez</p>
                                    </div>
                                    <div className="col-25C">
                                        <p className="negritasC letraC">Grupo:</p>
                                    </div>
                                    <div className="col-50C letraC">
                                        <p>IDGS-91</p>
                                    </div>
                                    <div className="col-25C">
                                        <p className="negritasC letraC">Fecha N.:</p>
                                    </div>
                                    <div className="col-50C letraC">
                                        <p>18 de Enero de 2000</p>
                                    </div>
                                    <div className="col-75C">
                                        <p className="cursiva letra2">Certificar que la persona mencionada anteriormente es estudiante de esta carrera.</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-75C">
                                        <p className="negritasC padding-leftC letra2">Inscrito en... No me acuerdo</p>
                                    </div>
                                    <div className="col-25C padding-rightC">
                                        <p className=" letra2">UTVT</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                </div>
            </div>
        )
    }
}