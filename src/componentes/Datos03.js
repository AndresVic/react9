import React from "react"

function Datos03(props){
        return <div>
            <h3>Componente: Datos-03</h3>
            <img src={props.img} alt="imagen: Datos 03" className="img" />
            <hr />
            { props.texto } { props.dato }
        </div>
    }
export default Datos03