import React from 'react'

export default class Captura extends React.Component{
    render(){
        return <div>
            <h3>Componente: Capturas</h3>
            <hr /> <br />
            <div className="row">
                { this.props.info.map((lista) => {
                    return(
                        <div className="col">
                            <div className="tarjeta">
                                <img src={ lista.img } alt="imagen 1" className="img_cap"/>
                                <div>
                                    <h5>N°.{ lista.id }: { lista.nombre }</h5>
                                    <p>
                                        Matricula: { lista.matricula } <br />
                                        Matricula: { lista.fecha } <br />
                                        Matricula: { lista.genero } <br />
                                        Matricula: { lista.carrera } <br />
                                        Matricula: { lista.universidad } <br />
                                    </p>
                                    <a href={lista.pdf} className="btn btn-primary" target="_blank">Descarga</a>
                                </div>
                            </div>
                        </div>
                    )
                }) }

            </div>
        </div>
    }
}

// function Captura(props){
//     return(
//         <div>
//             <h3>Componente: Capturas</h3>
//             <hr /> <br />
//             <div className="row">
//                 { props.info.map((lista) => {
//                     return(
//                         <div className="col">
//                             <div className="col">
//                                 <img src={ lista.img } alt="imagen 1"/>
//                                 <div>
//                                     <h5>N°.{ lista.id }: { lista.nombre }</h5>
//                                     <p>
//                                         Matricula: { lista.matricula } <br />
//                                         Matricula: { lista.fecha } <br />
//                                         Matricula: { lista.genero } <br />
//                                         Matricula: { lista.carrera } <br />
//                                         Matricula: { lista.universidad } <br />
//                                     </p>
//                                     <a href={lista.pdf} className="btn btn-primary" target="_blank">Descarga</a>
//                                 </div>
//                             </div>
//                         </div>
//                     )
//                 }) }

//             </div>
//         </div>

//     )
// }
// export default Captura;