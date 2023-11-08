import React from "react";
import { Link, NavLink } from "react-router-dom";
import instagram from "../../instagram.svg";
import whatsapp from "../../whatsapp.svg";




export const Footer = () => {
    return(
        <footer className="pie-pagina">
            <div className="box">
                <h2>SOBRE NOSOTROS</h2>
                <div className="nav flex-column">
                    <a className="linkFooter"><Link to="/" className="nav__link">INICIO</Link></a>
                    <a className="linkFooter"><NavLink to="/Productos" className="nav__link">PRODUCTOS</NavLink></a>
                    <a className="linkFooter"><NavLink to="/contacto" className="nav__link">CONTACTO</NavLink></a>
                </div>
            </div>
            <div className="box">
                        <img src="https://res.cloudinary.com/dgvz62cer/image/upload/v1698938277/AGROPARTES_crc4ir.png" alt="Logo Agropartes"/>
            </div>
            <div className="box">
                <h2>SIGUENOS</h2>
                <div className="red-social">
                    <img src={instagram}   alt="instagram" className="fa fa-instagram"/>
                    <img src={whatsapp}  alt="whatsapp" className="fa fa-whatsapp" />
                </div>
            </div>
        </footer>
    );
}

export default Footer