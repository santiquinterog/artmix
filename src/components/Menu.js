import React, { Component } from 'react';
import { FaWarehouse } from 'react-icons/fa';
import { IoIosDocument } from 'react-icons/io';

class Menu extends Component {

    render() {
        return (
            <div>
                <div className="nav">
                    <div className="elementos">
                        <h3>Teatro <FaWarehouse/></h3>
                        <br></br>
                        <h3>Poemas <IoIosDocument/></h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;
