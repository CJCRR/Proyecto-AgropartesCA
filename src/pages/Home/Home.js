import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer"


const Home = () => {
  return (
    <>
      <Header />
      <div className="inicio">
        <div className="row align-items-center header-main">
            <div className="titulo col-12 col-md-8 container">
              <h1 className="display-1">AGROPARTES</h1>
              <h3 >CALIDAD EN TODOS SUS PRODUCTOS</h3>
            </div>
        </div>
      </div>
      <div className="seccion-nosotros">
        <h2>Venta de repuestos de camiones y tractores diésel</h2>
        <p className="p-index">Somos una empresa en la distribución y venta de repuestos a nivel nacional que atiende las necesidades
          de nuestros clientes de forma rápida y eficiente, suministrando productos de alta rotación, calidad y
          garantizados a precios competitivos. Constituimos un solido equipo de trabajo.</p>
        <hr/>
        <div className="imgn d-none d-md-block">
            <img src="https://res.cloudinary.com/dgvz62cer/image/upload/v1698938278/buji_scldlw.png" className="buji" alt=""/>
            <img src="https://res.cloudinary.com/dgvz62cer/image/upload/v1698938284/ventilador_hrw8jg.png" className="ventilador" alt=""/>
            <img src="https://res.cloudinary.com/dgvz62cer/image/upload/v1698938281/piesa_oeka4s.png" className="piesa" alt=""/>
            <img src="https://res.cloudinary.com/dgvz62cer/image/upload/v1698938282/pist_jhkovr.png" className="pist" alt=""/>
        </div>
        <h4><NavLink to="/Nosotros">Leer mas</NavLink></h4>
      </div>

      <div className="Footer">
        <Footer/>
      </div>
    </>
  );
};

export default Home;
