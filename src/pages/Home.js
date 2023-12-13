import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeadImage from '../images/Hero.png';
import Tours from './Tours';




export default function () {

    return (
        <div className="App">
            <img
                src={HeadImage}
                className="img-fluid" // Bootstrap class for full-width image
                alt="Filipino Adventure"
                style={{ width: '100%', height: 'auto' }}
            />


            <Tours />


        </div>
    );
}
