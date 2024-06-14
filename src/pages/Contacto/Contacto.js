import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import instagram from "../../instagram.svg";
import whatsapp from "../../whatsapp.svg";



const Contacto = () => {
    return (
        <>
        <Header />
        
        <div className="contacto">
            <div className="ubicacion container justify-content-center">
                <div className="">
                    <h2>UBICANOS EN</h2>
                    <div className="direccion">
                        <p>Ciudad Bolivar, Estado Bolivar</p>
                        <p>Av. Jesus Soto, Edif. Graciangela, local 1b.</p>
                        <p>Frente al Aerupuerto.</p>
                    </div>
                    <h2>SIGUENOS</h2>
                    <div className="red-social2">
                    <a href="https://www.instagram.com/agropartess/" target="_blank"><img src={instagram}   alt="instagram" className="fa fa-instagram"/></a>
                        <a href="https://wa.me/+584148949391?text="><img src={whatsapp}  alt="whatsapp" className="fa fa-whatsapp" /></a>
                    </div>
                </div>
                <div className="ratio ratio-1x1">
                    <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.7485135372403!2d-63.540309824234235!3d8.127066891902643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8dce870b79447761%3A0x95ef119cee78c97e!2sAGROPARTES%2C%20C.A!5e0!3m2!1ses!2sve!4v1699379176621!5m2!1ses!2sve"
                    width="500"
                    height="500"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                    />
                </div>
            </div>
        </div>
        
        <div className="Footer">
            <Footer />
        </div>
        </>
    )
}

export default Contacto;

