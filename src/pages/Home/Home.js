import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer"
import { Icon } from '@iconify/react';


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
      <div className="servicios-1">
        
      <div className=" container servicios-2">
        <div className="item-hints ">
          <div className="hint" data-position="4">
            <span className="hint-radius"></span>
            <span className="hint-dot"><Icon icon="iconoir:delivery-truck" /></span>
            <div className="hint-content do--split-children">
              <p>ENVIOS NACIONALES</p>
            </div>
          </div>
        </div>
        
        <div className="item-hints ">
          <div className="hint" data-position="4">
            <span className="hint-radius"></span>
            <span className="hint-dot"><Icon icon="fluent:wallet-credit-card-20-regular" className="iconServicios" /></span>
            <div className="hint-content do--split-children">
              <p>TODOS LOS MEDIOS DE PAGO</p>
            </div>
          </div>
        </div>
        
        
        
        <div className="item-hints ">
          <div className="hint" data-position="4">
            <span className="hint-radius"></span>
            <span className="hint-dot"><Icon icon="lucide:package-check" /></span>
            <div className="hint-content do--split-children">
              <p>PRODUCTO DE CALIDAD</p>
            </div>
          </div>
        </div>

        <div className="item-hints ">
          <div className="hint" data-position="4">
            <span className="hint-radius"></span>
            <span className="hint-dot"><Icon icon="lucide:package-search" /></span>
            <div className="hint-content do--split-children">
              <p>VARIEDAD DE PRODUCTOS</p>
            </div>
          </div>
        </div>
      </div>
      </div>

      <div className="Footer">
        <Footer/>
      </div>
    </>
  );
};

export default Home;
