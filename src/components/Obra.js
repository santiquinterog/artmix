import React, { Component } from 'react';

class Obra extends Component {

    constructor(props) {
        super(props);
        this.state = {
            autor: '',
            imagen:''
        };

    }

    render() {
        return (
            <div>
                <div className="obra">
                    <img  src="img/romeo.jpg"></img>
                    <h4>Autor</h4>
                </div>
            </div>
        );
    }
}

export default Obra;