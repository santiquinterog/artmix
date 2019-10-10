import React, { Component } from 'react';
import Obra from './Obra';

class Contenedor extends Component {

    render() {
        return (
            <div>
                <div className="contenedor">
                    <Obra/>
                </div>
            </div>
        );
    }
}

export default Contenedor;
