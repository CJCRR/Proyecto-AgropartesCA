import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import NavInfo from "../../components/NavInfo/NavInfo";

const AvisoDePrivacidad = () => {
    return (
        <>
            <Header />
            <section class="container">
            <div class="row row-cols-1 row-cols-sm-2">

                <NavInfo />
                
                <div class="datos-ifo col-sm-9">
                    <h5>Aviso de Privacidad</h5>
                    <p>Según nuestras políticas de tratamiento de datos personales, los mecanismos a través de los
                        cuales hacemos uso de éstos son seguros y confidenciales, pues contamos con los medios
                        tecnológicos idóneos para asegurar que sean almacenados de manera tal que se impida el acceso
                        indeseado por parte de terceras personas, y en ese mismo orden aseguramos la confidencialidad de
                        los mismos.</p>

                    <p>Sus datos personales serán incluidos en una base de datos y serán utilizados para las siguientes
                        finalidades:</p>

                    <ul>
                        <li>Lograr una eficiente comunicación relacionada con nuestros productos, servicios, ofertas,
                            promociones, alianzas, estudios, contenidos, así como los de nuestras compañías vinculadas,
                            y para facilitarle el acceso general a la información de éstos.</li>
                        <li>Proveer nuestros servicios y productos.</li>
                        <li>Informar sobre nuevos productos o servicios que estén relacionados con el o los
                            contratado(s) o adquirido(s).</li>
                        <li>Dar cumplimiento a obligaciones contraídas con nuestros clientes, proveedores, y empleados.
                        </li>
                        <li>Informar sobre cambios de nuestros productos o servicios.</li>
                        <li>Evaluar la calidad del servicio.</li>
                        <li>Realizar estudios internos sobre hábitos de consumo.</li>
                    </ul>

                    <p>Se le informa a los titulares de información que pueden consultar el Manual Interno de Políticas
                        y Procedimientos de Datos Personales., que contiene nuestras políticas para el tratamiento de la
                        información recogida, así como los procedimientos de consulta y reclamación que le permitirán
                        hacer efectivos sus derechos al acceso, consulta, rectificación, actualización y supresión de
                        los datos, entrando a la sección de Privacidad</p>
                    </div>
                </div>
            </section>

        <div className="Footer">
            <Footer />
        </div>
 
        </>
    )
}

export default AvisoDePrivacidad;