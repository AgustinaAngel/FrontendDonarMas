import React, { useState, useContext, useEffect } from 'react';
import user from '../context/user.js';
import Carousel from './Carousel';
import QuieroAyudar from './QuieroAyudar.js';

const Home = () => {
    const myContextUser = useContext(user);
    const [mostrarQuieroAyudar, setMostrarQuieroAyudar] = useState(true);

    useEffect(() => {
        if ((myContextUser.tipo === "Donante") || (myContextUser.tipo === "ONG")) {
            setMostrarQuieroAyudar(false);
        } else {
            setMostrarQuieroAyudar(true);
        }
    }, [myContextUser.tipo]);

    return (
        <>
            <Carousel />
            <br />
            <center>
                <h1 className="slogan">“Más solidaridad, más impacto: Donar+ liderando el cambio"</h1>
                {mostrarQuieroAyudar && <QuieroAyudar/>}
               
            </center>
        </>
    );
};

export default Home;
