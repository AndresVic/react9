import React from 'react'

export default class Form02 extends React.Component{
    state = {
        
    }

    envioForm = (evento) => {
        evento.preventDefault()
        console.log(this.state)
    }

    render(){
        const { camForm, info } = this.props
        return(
            <div className="container">
                <br />
                <div className="container mb-4">
                    <form onSubmit={ this.envioForm }>
                        <div className="form-group mt-2">
                            <label>Matricula: </label>
                            <input type="texto" name="matricula" value={ info.matricula } className="form-control" onChange={ camForm }/>
                        </div>
                        <div className="form-group mt-2">
                            <label>Nombre: </label>
                            <input type="texto" name="nombre" value={ info.nombre } className="form-control" onChange={ camForm }/>
                        </div>
                        <div className="form-group mt-2">
                            <label>App: </label>
                            <input type="texto" name="app" value={ info.app } className="form-control" onChange={ camForm }/>
                        </div>
                        <div className="form-group mt-2">
                            <label>Fecha de Nacimiento: </label>
                            <input type="date" name="fn" value={ info.fn } className="form-control" onChange={ camForm }/>
                        </div>
                        <div className="form-group mt-2">
                            <label>Grupo: </label>
                            <select className="form-control" name="grupo" onChange={ camForm }>
                                <option value="">--- Selecciona una Opción ---</option>
                                <option value="IDGS-91">IDGS-91</option>
                                <option value="IDGS-92">IDGS-92</option>
                                <option value="IDGS-93">IDGS-93</option>
                            </select>
                        </div>

                        <div className="form-group mt-2 text-center">
                            <input type="submit" value="Enviar" className="btn btn-info mt-2" />
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}