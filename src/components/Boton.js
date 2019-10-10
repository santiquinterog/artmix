import React, { Component } from 'react';
import {GoDiffAdded} from 'react-icons/go';

const Boton = ({ title }) => (
    <div>
        <a href="/AnadirPoema" className="boton">Add <GoDiffAdded/></a>
    </div>
);

export default Boton;
