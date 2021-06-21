import React from 'react'
import Menu from './Menu';

export default class Form1 extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            nombre: ''
            , app: ''
            , fn: ''
            , gen: 'Femenino'
            , email: ''
            , grupo: ''
            , activo: false
        };
        this.envioValor = this.envioValor.bind(this);
    }

    envioValor = (evento) => {
        let name = evento.target.name;
        let variable = evento.target.value;
        let checked = evento.target.checked;
        let type = evento.target.type;
        this.setState({[name]:type !== "checkbox"? variable:checked});
    }

    envioValor2 = ({type, name, value, checked}) => {
        this.setState({[name]:type === "checkbox"? checked:value});
    }

    render(){
        return(
            <div className="container">
                <Menu />
                <br />
                <div className="container col-md-6 mb-4">
                    <h1>Formulario N°.1</h1>
                    <form onSubmit={ this.envioForm }>
                        <div className="form-group mt-2">
                            <label>Nombre: </label>
                            <input type="texto" name="nombre" value={ this.state.nombre } className="form-control" onChange={ this.envioValor }/>
                            {/* onChange={ event=>this.envioValor2(event.target) } */}
                        </div>
                        <div className="form-group mt-2">
                            <label>App: </label>
                            <input type="texto" name="app" value={ this.state.app } className="form-control" onChange={ this.envioValor }/>
                        </div>
                        <div className="form-group mt-2">
                            <label>Fecha de Nacimiento: </label>
                            <input type="date" name="fn" value={ this.state.fn } className="form-control" onChange={ this.envioValor }/>
                        </div>
                        <div className="form-group mt-2">
                            <label>Genero: </label>
                            <div className="from-check">
                                <input type="radio" name="gen" value="Femenino" className="form-check-input" onChange={ this.envioValor } checked/>
                                <label className="from-check-label">Femenino</label>
                            </div>
                            <div className="from-check">
                                <input type="radio" name="gen" value="Masculino" className="form-check-input" onChange={ this.envioValor }/>
                                <label className="from-check-label">Masculino</label>
                            </div>
                        </div>
                        <div className="form-group mt-2">
                            <label>Email: </label>
                            <input type="email" name="email" value={ this.state.email } className="form-control" onChange={ this.envioValor }/>
                        </div>
                        <div className="form-group mt-2">
                            <label>Grupo: </label>
                            <select className="form-control" name="grupo" onChange={ this.envioValor }>
                                <option value="">--- Selecciona una Opción ---</option>
                                <option value="IDGS-91">IDGS-91</option>
                                <option value="IDGS-92">IDGS-92</option>
                                <option value="IDGS-93">IDGS-93</option>
                            </select>
                        </div>
                        <div className="form-group mt-2">
                            <input type="checkbox" name="activo" value={ this.state.activo } className="form-check-input" onChange={ this.envioValor }/>
                            <label>Activo</label>
                        </div>

                        <div className="form-group mt-2">
                            <input type="submit" value="Enviar" className="btn btn-info mt-2" />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
