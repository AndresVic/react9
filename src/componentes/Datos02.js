// Creando componentes
import React from "react"

export default class Datos02 extends React.Component {
        constructor(props){
            super(props)
            this.state = {
                img: 'https://media.tenor.com/images/e6af8cfa3c441c4d28cf4cd3bd93f883/tenor.gif',
                pdf: 'https://media.tenor.com/images/8a06ff98a0ec1fcf452cbefcf6770824/tenor.gif',
                texto: '- - - - - - -',
                dato: '* * * * * *'
            }
        }
        componentDidMount(){
            setTimeout(() => {
                this.setState({
                    img: this.props.img,
                    pdf: this.props.pdf,
                    texto: this.props.texto,
                    dato: this.props.dato,
                })
            }, 5000);
        }

        render(){
            // const { img, pdf, texto, dato } = this.props
            const { img, pdf, texto, dato } = this.state
            return <div>
                <h3>Componente: Datos02</h3>
                <img src={ img } alt="imagen: Datos-02" className="img" /><br/>
                <a href={ pdf } rel="noopener noreferrer" target="_black">Archivo de Descarga</a>
                <hr />
                { texto } { dato }
                <br /><br />
            </div>
        }
    }