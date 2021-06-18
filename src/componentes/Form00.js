import React from 'react'

export default class Form extends React.Component {
    constructor(props){
        super(props)
        this.state = { nombre: ''};

        this.envioFormulario = this.envioFormulario.bind(this);
        this.envioNombre = this.envioNombre.bind(this);
    }
    envioNombre(evento){
        this.setState({ nombre: evento.target.value });
    }
    envioFormulario(evento){
        alert("Nombre " + this.state.nombre + ", enviado");
        console.log("Nombre " + this.state.nombre + ", enviado");
        evento.preventDefault();
    }
    render(){
        return (
            <div className="container col-md-6 text-center">
                <div className="card">
                    <div className="card-body">
                        <h1 className="a2">Formulario N°.1</h1>
                        <hr />
                        <form onSubmit={ this.envioFormulario } className="mb-4">
                            <div className="form-group">
                                <label>Nombre: </label>
                                <input type="text" name="nombre" value={ this.state.nombre } className="form-control" onChange={ this.envioNombre }/>
                            </div>
                            <div className="form-group">
                                {/* <label>Nombre: </label> */}
                                <input type="submit" className="btn btn-success btn-sm mt-4" />
                            </div>
                        </form> 
                    </div>
                </div>
            </div>
        )
    }
}