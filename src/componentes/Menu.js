import React from 'react'

export default class Menu extends React.Component {
    render(){
        return (
            <div className="mb-4">
                <ul className="nav">
                    <li className="nav-item">
                        <a className="nav-link active" href="menu">INICIO</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/">Datos01</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="lista">Lista</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="formulario">Formulario</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="formulario2">Formulario2</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="credencial-tarea">Credencial</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="datos-alumno">Datos Alumno</a>
                    </li>
                </ul>
            </div>
        )
    }
}