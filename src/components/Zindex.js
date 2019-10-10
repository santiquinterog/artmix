import React, { Component } from 'react';
import {GoDiffAdded} from 'react-icons/go';

class Zindex extends Component {

    render() {
        return (
            <div>
                <div className="zindex" style={{zIndex:5}} >
                    <p>Autor</p>
                    <input type="text"></input>
                    <p>Imagen</p>
                    <input type="text"></input>
                    <a className="buton">Add <GoDiffAdded/></a>
                </div>
            </div>
        );
    }
}

export default Zindex;