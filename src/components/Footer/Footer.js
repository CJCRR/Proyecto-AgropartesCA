import React from "react";
import { Link, NavLink } from "react-router-dom";
import instagram from "../../instagram.svg";
import whatsapp from "../../whatsapp.svg";

//<a href="https://www.instagram.com/agropartess/" target="_blank"><img src={instagram}   alt="instagram" className="fa fa-instagram"/></a>
  //                  <img src={whatsapp}  alt="whatsapp" className="fa fa-whatsapp" />


const Footer = () => {
    return(
        <div>
            <footer className="pie-pagina">
            <div className="box">
                <h2>SOBRE NOSOTROS</h2>
                <div className="nav flex-column">
                    <a className="linkFooter"><Link to="/" className="nav__link">INICIO</Link></a>
                    <a className="linkFooter"><NavLink to="/Productos" className="nav__link">PRODUCTOS</NavLink></a>
                    <a className="linkFooter"><NavLink to="/Nosotros" className="nav__link">NOSOTROS</NavLink></a>
                    <a className="linkFooter"><NavLink to="/contacto" className="nav__link">CONTACTO</NavLink></a>
                </div>
            </div>
            <div className="box">
                <img src="https://res.cloudinary.com/dgvz62cer/image/upload/v1698938277/AGROPARTES_crc4ir.png" alt="Logo Agropartes" className="agropar"/>
            </div>
            <div className="box">
                <h2 className="linkFooter"><NavLink to="/TerminosYCondiciones" className="nav__link">MAS INFORMACION</NavLink></h2>
                <div className="nav flex-column">
                    <a className="linkFooter"><NavLink to="/TerminosYCondiciones" className="nav__link">TERMINOS Y CONDICIONES</NavLink></a>
                    <a className="linkFooter"><NavLink to="/TerminosYCondiciones/Envios" className="nav__link">ENVIOS</NavLink></a>
                    <a className="linkFooter"><NavLink to="/TerminosYCondiciones/AvisoDePrivacidad" className="nav__link">AVISO DE PRIVACIDAD</NavLink></a>
                </div>
            </div>
            </footer>
            <div className="footer-bottom">
                <small>Copyright &copy; 2023 "AGROPARTES C.A". Todos los Derechos Reservados - Diseñado por CJCRR</small>
            </div>
        </div>
        
    );
}

export default Footer