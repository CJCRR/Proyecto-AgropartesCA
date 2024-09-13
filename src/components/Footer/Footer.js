import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Facebook, Instagram, Linkedin } from 'react-bootstrap-icons';

const Footer = () => {
    return (
        <div class="page-container">
            <footer class="top">
                <img src="https://res.cloudinary.com/dgvz62cer/image/upload/v1698938277/AGROPARTES_crc4ir.png" alt="Logo Agropartes" className="agropar" />
                <div class="links">
                    <div class="links-1">
                        <h2>Sobre Nosotros</h2>
                        <a><Link to="/" className="nav__link">Inicio</Link></a>
                        <a><NavLink to="/Nosotros" className="nav__link">Nosotros</NavLink></a>
                        <a><NavLink to="/contacto" className="nav__link">Contacto</NavLink></a>
                        <a><NavLink to="/Productos" className="nav__link">Productos</NavLink></a>
                    </div>
                    <div class="links-1">
                        <h2><NavLink to="/TerminosYCondiciones" className="nav__link">Politica</NavLink></h2>
                        <a><NavLink to="/TerminosYCondiciones" className="nav__link">Terminos y condiciones</NavLink></a>
                        <a><NavLink to="/TerminosYCondiciones/Envios" className="nav__link">Envios</NavLink></a>
                        <a><NavLink to="/TerminosYCondiciones/AvisoDePrivacidad" className="nav__link">Aviso De Privacidad</NavLink></a>
                        <a>Devoluciones y Garantía</a>
                    </div>
                    <div class=" links-1 socials-column">
                        <h2>Social Media</h2>
                        <p>
                            Síguenos en las redes sociales para enterarte de las últimas actualizaciones sobre nuestro
                            progreso.
                        </p>
                        <div className="socials">
                            <a className="links-2" href="https://www.instagram.com/agropartess/" target="_blank">
                                <Instagram className="social-icon" />
                            </a>
                            <a className="links-2" href="https://www.instagram.com/alphadieselca/" target="_blank">
                                <Instagram className="social-icon" />
                            </a>
                            <a className="links-2" href="https://www.linkedin.com/in/cristohper-rodríguez-82ba93281/" target="_blank">
                                <Linkedin className="social-icon" />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
            <footer class="bottom">
                <div class="legal">
                    <span> © 2024 Agropartes C.A, Creador del sitio CJCRR. </span>
                    <a> Ayuda </a>
                    <a> Preguntas Frecuentes </a>
                    <a><NavLink to="/contacto" className="nav__link">Contacto</NavLink></a>
                </div>
                <div class="links">
                    <a className="links-2" href="https://www.instagram.com/agropartess/" target="_blank">
                        <Instagram className="social-icon" />
                    </a>
                    <a className="links-2" href="https://www.instagram.com/alphadieselca/" target="_blank">
                        <Instagram className="social-icon" />
                    </a>
                    <a className="links-2" href="https://www.linkedin.com/in/cristohper-rodríguez-82ba93281/" target="_blank">
                        <Linkedin className="social-icon" />
                    </a>
                </div>
            </footer>
        </div>

    );
}

export default Footer