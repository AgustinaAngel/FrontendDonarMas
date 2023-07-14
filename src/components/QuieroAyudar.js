import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';


function QuieroAyudar() {


    return (
        <>
            <h2 className="quieroAyudar">¿Querés empezar a ayudar?</h2>
            <button className=" botonVioleta" type="submit">
                Registrate
            </button>

        </>
    );
};

export default QuieroAyudar;