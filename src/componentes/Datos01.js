// Creando componentes
import React from "react";
import pig from '../img/pig.jpg'

import Datos02 from "./Datos02";

// class Datos01 extends React.Component {
//         render(){
//             return <div>
//                 <h3>Componente: Datos01</h3>
//                 <img src={pig} alt="pig" className="img-fluid img-thumbnail rounded" />

//                 <hr />

//                 {this.props.texto} {this.props.dato}

//             </div>
//         }
//     }
// export default Datos01

// SEGUNDA DECLARACION DE CLASE
// export default class Datos01 extends React.Component {
//         render(){
//             return <div>
//                 <h3>Componente: Datos01</h3>
//                 <img src={pig} alt="pig" className="img-fluid img-thumbnail rounded" />

//                 <hr />

//                 {this.props.texto} {this.props.dato}

//             </div>
//         }
//     }

// PRIMERA DECLARACION POR FUNCION
// function Datos01(props){
//         return <div>
//             <h3>Componente: Datos01</h3>
//             <img src={pig} alt="pig" className="img-fluid img-thumbnail rounded" />
        
//             <hr />
        
//             {props.texto} {props.dato}
        
//         </div>
//     }
// export default Datos01

// SEGUNDA DECLARACION POR FUNCION
const Datos01 = (props) => (
        <div>
            <h3>Componente: Datos01</h3>
            <img src={pig} alt="pig" className="img-fluid img-thumbnail rounded mb-3" />
            <br/>
            
            {props.texto} {props.dato}
            <hr />

            <Datos02 />

            <br/><br/>
        </div>
)
export default Datos01