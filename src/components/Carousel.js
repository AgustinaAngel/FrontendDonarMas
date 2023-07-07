import React from 'react';
import CAROUSEL1 from '../img/CAROUSEL1.jpg';
import CAROUSEL2 from '../img/CAROUSEL2.jpg';
import CAROUSEL3 from '../img/CAROUSEL3.jpg';

function Carousel() {


    return(
    <>
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                 
                    <img  src={CAROUSEL1} className="d-block w-100 tamañoCarousel" alt="..." />
                </div>
                <div className="carousel-item">
                <img  src={CAROUSEL2} className="d-block w-100 tamañoCarousel" alt="..." />
                </div>
                <div className="carousel-item">
                <img  src={CAROUSEL3} className="d-block w-100 tamañoCarousel" alt="..." />
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
        </>
  );
};

export default Carousel;