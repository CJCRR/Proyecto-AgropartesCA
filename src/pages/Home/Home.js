import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer"
import { Icon } from '@iconify/react';
import ProductSlider from "../../components/RandonProducts/RandomProducts";
import CarouselHome from "../../components/Carousel/CarouselHome";
import InfoHome from "../../components/InfoHome/InfoHome";



const Home = () => {
  return (
    <>
      <Header />
      <section id="section-1">
        <CarouselHome />
      </section>
      <div className=" container sliderRandomProducts">
        <ProductSlider />
      </div>
      <div className="seccion-nosotros">
        <h2>Venta de repuestos de camiones y tractores diésel</h2>
        <p className="p-index">Somos una empresa en la distribución y venta de repuestos a nivel nacional que atiende las necesidades
          de nuestros clientes de forma rápida y eficiente, suministrando productos de alta rotación, calidad y
          garantizados a precios competitivos.</p>
        <hr />
        <div className="imgn ">
          <img src="https://res.cloudinary.com/dgvz62cer/image/upload/v1698938278/buji_scldlw.png" className="buji" alt="" />
          <img src="https://res.cloudinary.com/dgvz62cer/image/upload/v1698938284/ventilador_hrw8jg.png" className="ventilador" alt="" />
          <img src="https://res.cloudinary.com/dgvz62cer/image/upload/v1698938281/piesa_oeka4s.png" className="piesa" alt="" />
          <img src="https://res.cloudinary.com/dgvz62cer/image/upload/v1698938282/pist_jhkovr.png" className="pist" alt="" />
        </div>
        <h4><NavLink to="/Nosotros">Leer mas</NavLink></h4>
      </div>

      <div className="servicios-1">
        <InfoHome />
      </div>

      <div className="Footer">
        <Footer />
      </div>
    </>
  );
};

export default Home;
