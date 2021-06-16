import React from "react";

import Datos02 from "./Datos02";
import Datos03 from "./Datos03";
import Datos04 from "./Datos04";
import Lista from "./Lista";

import pig from '../img/pig.jpg'
import archivo_1 from "../files/horario.pdf"

var text="Información textual desde Datos01.js";

export default class Datos01 extends React.Component {
        render(){
            return <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <Datos02 img={pig} pdf={archivo_1} texto={text} dato=", componente N°.2" />
                    </div>
                    <div className="col-sm">
                        <Datos03 img={pig} pdf={archivo_1} texto={text} dato=", componente N°.3" />
                    </div>
                    <div className="col-sm">
                        <Datos04 img={pig} texto={text} dato=", componente N°.4" />
                    </div>
                </div>
                <hr />
                <Lista />
                <br/><br/>
                <br/><br/>
            </div>
        }
    }
