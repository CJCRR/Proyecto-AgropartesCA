import React from 'react';
import Slider from "react-slick";
import { Icon } from '@iconify/react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const InfoHome = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };
    return (
        <div className=" container servicios-2">
            <h1>Servicios</h1>
            <div>
                <Slider {...settings} className="infoHome">

                    <div className="item-hints ">
                        <div class="info-card" data-position="4">
                            <span className="hint-dot"><Icon icon="iconoir:delivery-truck" /></span>
                            <p class="info-small-desc">
                                ENVIOS NACIONALES
                            </p>
                        </div>
                    </div>

                    <div className="item-hints">
                        <div class="info-card" data-position="4">
                            <span className="hint-dot"><Icon icon="fluent:wallet-credit-card-20-regular" className="iconServicios" /></span>
                            <p class="info-small-desc">
                                MEDIOS DE PAGO
                            </p>
                        </div>
                    </div>

                    <div className="item-hints">
                        <div class="info-card" data-position="4">
                            <span className="hint-dot"><Icon icon="lucide:package-check" /></span>
                            <p class="info-small-desc">
                                PRODUCTOS DE CALIDAD
                            </p>
                        </div>
                    </div>

                    <div className="item-hints">
                        <div class="info-card" data-position="4">
                            <span className="hint-dot"><Icon icon="lucide:package-search" /></span>
                            <p class="info-small-desc">
                                VARIEDAD DE PRODUCTOS
                            </p>
                        </div>
                    </div>
                </Slider>
                
            </div>
        </div>
    )
};


export default InfoHome;


