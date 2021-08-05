import React from "react";

import Form02 from '../componentes/Form02'
import Credencial from "../componentes/Credencial";
import Menu from "../componentes/Menu";

export default class Pg_01 extends React.Component{
    state = {
            info: {
                matricula: 221811724
                , nombre: 'Andres'
                , app: 'Victoriano'
                , fn: '2000-01-18'
                , grupo: 'IDGS-91'
            }
        }
    envioValor = (evento) => {
        this.setState({
            info:{
                ...this.state.info,
                [evento.target.name]: evento.target.value
                
            }
        });
    }
    render(){
        return(
            <div className="container">
                <Menu />
                <div className="row">
                    <div className="col-md-8 mt-4">
                        <h1>Informacion de Alumno</h1>
                        <small>Credencial con Datos desde el Formulario</small>
                        <Credencial { ...this.state.info }/>
                    </div>
                    <div className="col-md-4 align-self-center mt-4">
                        <h1 className="text-center">Formulario Alumno</h1>

                        <Form02 
                            camForm = {this.envioValor}
                            info = {this.state.info}
                        />
                    </div>
                    
                </div>
            </div>
        )
    }
}