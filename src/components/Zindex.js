import React, { Component } from 'react';

class Zindex extends Component {

    render() {
        return (
            <div>
                <div className="zindex">
                    <p>Autor</p>
                    <input type="text"></input>
                    <p>Imagen</p>
                    <input type="text"></input>
                    <button className="buton">Add</button>
                </div>
            </div>
        );
    }
}

export default Zindex;