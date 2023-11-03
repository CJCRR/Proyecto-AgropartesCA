import React from "react";
import { Link, NavLink } from "react-router-dom";



export const Footer = () => {
    return(
        <footer className="pie-pagina">
            <div className="box">
                <h2>SOBRE NOSOTROS</h2>
                <div className="nav flex-column">
                    <a className="linkFooter"><Link to="/" className="nav__link">INICIO</Link></a>
                    <a className="linkFooter"><NavLink to="/shop" className="nav__link">PRODUCTOS</NavLink></a>
                    <a className="linkFooter">CONTACTO</a>
                </div>
            </div>
            <div className="box">
                        <img src="https://res.cloudinary.com/dgvz62cer/image/upload/v1698938277/AGROPARTES_crc4ir.png" alt="Logo Agropartes"/>
            </div>
            <div className="box">
                <h2>SIGUENOS</h2>
                <div className="red-social">
                    <a href="#" className="fa fa-facebook"></a>
                    <a href="https://www.instagram.com/agropartess/" className="fa fa-instagram"></a>
                    <a href="#" className="fa fa-whatsapp"></a>
                </div>
            </div>
        </footer>
    );
}

export default Footer