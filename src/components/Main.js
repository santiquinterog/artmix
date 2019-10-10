import React, { Component } from 'react';
import Titulo from './Titulo';
import Boton from './Boton';
import Contenedor from './ContenedorObras';

class Main extends Component {

    render() {
        return (
            <div>
                <div className="main">
                    <Titulo/>
                    <br></br>
                    <Boton/>
                    <br></br>
                    <br></br>
                    <Contenedor/>
                </div>
            </div>
        );
    }
}

export default Main;
