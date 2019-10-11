import React, { Component } from 'react';

class Obra extends Component {

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