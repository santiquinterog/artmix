import React, { Component } from 'react';
import {GoDiffAdded} from 'react-icons/go';

class Boton extends Component {

    render() {
        return (
            <div>
                <div className="boton">
                    <button>Add <GoDiffAdded/></button>
                </div>
            </div>
        );
    }
}

export default Boton;
