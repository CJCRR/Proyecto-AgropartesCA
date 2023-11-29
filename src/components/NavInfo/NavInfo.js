
import React from "react";
import { NavLink } from "react-router-dom";

const NavInfo = () => {
    return (
        <>
            <div class="menu-info col-sm-3 ">
                <hr />
                <h5>Informacion</h5>
                <hr />
                <div class="menu-info">
                    <a className="linkFooter"><NavLink to="/TerminosYCondiciones/Envios" className="nav__link">ENVIOS</NavLink></a>
                    <a><NavLink to="/TerminosYCondiciones/AvisoDePrivacidad" className="nav__link">AVISO DE PRIVACIDAD</NavLink></a>
                    <a className="linkFooter"><NavLink to="/TerminosYCondiciones" className="nav__link">TERMINOS Y CONDICIONES</NavLink></a>
                </div>
                
                <hr />
                <div class="menu-info">
                    <a className="linkFooter"><NavLink to="/Contacto" className="nav__link nav-link nav-item" >CONTACTO</NavLink></a>
                    
                </div>
                <hr />
                
            </div>
        </>
    )
}

export default NavInfo;