import React from "react"

const Datos04 = (props) =>{
        return <div>
            <h3>Componente: Datos-04</h3>
            <img src={props.img} alt="imagen: Datos 04" className="img" />
            <hr />
            { props.texto } { props.dato }
        </div>
    }
export default Datos04