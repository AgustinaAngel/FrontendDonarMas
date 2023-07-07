import React, { useState, useContext, useEffect } from 'react';
import user from '../context/user.js';
import Carousel from './Carousel';
import QuieroAyudar from './QuieroAyudar';

const Home = () => {
    const myContextUser = useContext(user);
    const [mostrarQuieroAyudar, setMostrarQuieroAyudar] = useState(false);

    useEffect(() => {
        if (myContextUser.tipo !== "ONG" && myContextUser.tipo !== "Donante") {
            setMostrarQuieroAyudar(true);
        }
    }, [myContextUser.tipo]);

    return (
        <>
            <Carousel />
            <br />
            <center>
                <h1 className="slogan">“Más solidaridad, más impacto: Donar+ liderando el cambio"</h1>
                {mostrarQuieroAyudar && <QuieroAyudar />}
                <button className=" botonVioleta" type="submit">
                    Registrate
                  </button>
            </center>
        </>
    );
};

export default Home;