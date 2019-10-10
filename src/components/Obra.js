import React, { Component } from 'react';

class Obra extends Component {

    constructor() {
        super();
        this.state = {
            obras: [{ autor: 'La celestina', img: 'https://http2.mlstatic.com/libro-la-celestina-tragicomedia-de-calisto-y-melibea-D_NQ_NP_770218-MLA25923781071_082017-F.jpg' }],
        };
        this.handleChange = this.handleChange.bind(this);
        this.anadirObras = this.anadirObras.bind(this);
        this.obtenerObras = this.obtenerObras.bind(this);
    }
    componentDidMount() {
        console.log(this.state);
        this.anadirObras();
        this.obtenerObras();
    }

    anadirObras() {
        const obras = [{ autor: 'Shakespiere', img: 'https://images-eu.ssl-images-amazon.com/images/I/51ajznr23jL.jpg'}];
        localStorage.setItem("obras", JSON.stringify(obras));
        console.log('Obra guardada');
    }

    obtenerObras() {
        let array = JSON.parse(localStorage.getItem('obras'));
        array.map(obra => {
            let newChild = obra;
            this.setState({
                obras: [...this.state.obras, newChild]
            });
        });

    }


    handleChange(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            
            <div className="contenedorObra">
                {
                    this.state.obras.map(obra => {
                        return (
                            <div className="obra">
                                <img src={obra.img}></img>
                                <h4>{obra.autor}</h4>
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}

export default Obra;