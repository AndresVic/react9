import React from 'react'
import Menu from './Menu'

export default class Lista extends React.Component{
        constructor(props){
            super(props)
            this.state = {
                info: [
                    {
                    id: '01',
                    img: 'https://i.pinimg.com/originals/89/d7/ad/89d7ad479546f6ca78e329afa6d722f6.gif',
                    nombre: 'Andy Vic',
                    fecha: '18 de Enero, 2000',
                    pdf: 'https://i.pinimg.com/originals/89/d7/ad/89d7ad479546f6ca78e329afa6d722f6.gif',
                },
                {
                    id: '02',
                    img: 'https://i.pinimg.com/originals/70/e4/19/70e41967b510a6b7382cc10294befb56.gif',
                    nombre: 'Andresito Jimenez',
                    fecha: '18 de Febrero, 2001',
                    pdf: 'https://i.pinimg.com/originals/70/e4/19/70e41967b510a6b7382cc10294befb56.gif',
                },
                {
                    id: '03',
                    img: 'https://media.tenor.com/images/8c54acd86b998b2246f6f8b5cee2b5d8/tenor.gif',
                    nombre: 'Victoriano Andres',
                    fecha: '18 de Marzo, 2002',
                    pdf: 'https://media.tenor.com/images/8c54acd86b998b2246f6f8b5cee2b5d8/tenor.gif',
                }
            ]
        }
    }
    render(){
        return <div className="table-responsive-sm">
            <Menu />
            <h3>Componente: Lista</h3><hr />
            <table className="table table-hover">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Foto</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Fecha</th>
                        <th scope="col">Archivo</th>
                    </tr>
                </thead>
                <tbody>
                    { this.state.info.map((lista) => {
                        return(
                            <tr key={ lista.id } className="table-light">
                                <td>{ lista.id }</td>
                                <td><img src={ lista.img } alt="imagen: lista" width="100" className="img-fluid img-thumbnail rounded" /></td>
                                <td>{ lista.nombre }</td>
                                <td>{ lista.fecha }</td>
                                <td><a href={ lista.pdf } rel="noopener noreferrer" target="_blank">Archivo de Descarga</a></td>
                            </tr>
                        )
                    })} 
                </tbody>
            </table>
        </div>
    }
}