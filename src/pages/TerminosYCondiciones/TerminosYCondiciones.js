import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import NavInfo from "../../components/NavInfo/NavInfo";
import { Link } from "react-router-dom";
import { ChevronRight } from 'react-bootstrap-icons';

const TerminosYCondiciones = () => {
    return (
        <>
            <Header />
            <header class="container">
                <h1>Terminos y Condiciones</h1>
                <ul class="breadcrumb">
                    <a ><li><Link to="/" className="nav__link nav-link">Inicio</Link></li></a>
                    <ChevronRight />
                    <a  disabled><li>Terminos y Condiciones</li></a>
                </ul>
            </header>
            <section class="container">
                <div class="row row-cols-1 row-cols-sm-2">

                    <NavInfo />

                    <div class="datos-ifo col-sm-9">
                        <p>Este Sitio Web www.agropartesCa.com (el “Sitio Web”) es operado por AROPARTES C.A.
                            (“AGROPARTES” o “nosotros”) y se encuentra a su disposición para fines comerciales. Al acceder
                            o utilizar este Sitio Web, usted acepta estos Términos y Condiciones de Uso y Privacidad. Si
                            usted no acepta los Términos y Condiciones de Uso, usted no puede utilizar este Sitio Web.</p>

                        <h5>Registro Contraseña</h5>
                        <p>El titular se reserva el derecho de solicitar el registro del Visitante para la Página Web, toda
                            o parte de ella, que previamente haya sido de libre acceso y, en tal caso, está facultada, en
                            cualquier momento y sin expresión de causa, a denegar al usuario el acceso al área protegida por
                            contraseñas, en particular si el usuario:</p>
                        <ol>
                            <li>Proporciona datos incorrectos con el fin de registrarse</li>
                            <li>Incumple estos Términos y Condiciones de Uso y Privacidad</li>
                            <li>Incumple cualquier normativa aplicable respecto del acceso o el uso de la presente Página
                                Web.</li>
                        </ol>

                        <h5>Links</h5>
                        <p>Este Sitio Web puede incluir conexiones a otros sitios web operados por otras compañías de
                            AGROPARTES y/o que sean operados por terceros. Estas conexiones son provistas para su comodidad
                            y como un canal de acceso adicional para las informaciones contenidas en los mismos. No hemos
                            revisado toda la información contenida en otros sitios y no somos responsables por el contenido
                            de otros sitios web ni por los productos o servicios que pudieran ser ofrecidos a través de
                            otros sitios. Sitios web de terceros pueden contener información con la cual AGROPARTES
                            concuerda o no. Diferentes términos y condiciones pueden resultar aplicables al uso por nuestra
                            parte de cualquiera de dichos sitios web conectados. Por favor tenga en consideración que los
                            términos y condiciones de uso de otros sitios web son sustancialmente diferentes de estos
                            términos y condiciones.</p>

                        <h5>Precisión, integridad y actualidad de la Información en este Sitio Web</h5>
                        <p>Este Sitio Web puede contener cierta información histórica. Las informaciones históricas no son
                            necesariamente actualizadas y son provistas únicamente para su referencia. Hacemos reserva del
                            derecho de modificar el contenido de este Sitio Web en cualquier ocasión sin previo aviso.</p>

                        <h5>Uso de Material de este Sitio Web</h5>
                        <p>Este Sitio Web (incluyendo todo su contenido) es propiedad de AGROPARTES C.A. Excepto cuando
                            fuera expresamente dispuesto de otro modo, autorizamos a Ud. a consultar este Sitio Web y a
                            imprimir y descargar copias del material del Sitio Web solamente para su uso personal, no
                            comercial, ello en la medida en que Ud. no elimine o remueva cualquier notificación o
                            información de derechos de autor o propiedad intelectual que aparecieran en el material que Ud.
                            imprimiera o descargara. Ud. acuerda que salvo lo expuesto precedentemente, no reproducirá,
                            distribuirá, mostrará o transmitirá cualquier material en el Sitio Web, de cualquier manera y/o
                            por cualquier medio. Ud. también acuerda no modificar, vender, transmitir o distribuir cualquier
                            material en el Sitio Web, de cualquier manera o en cualquier medio, incluyendo la carga del
                            material o de otro modo poner el material disponible en línea.</p>

                        <h5>Marcas</h5>
                        <p>Este Sitio Web incluye y presenta logos, logotipos y otras marcas comerciales y marcas de
                            servicio que son propiedad de, o son licenciadas a, varias afiliadas de AGROPARTES. El Sitio
                            Web también puede incluir marcas comerciales o marcas de servicio de terceros. Todas esas marcas
                            comerciales son propiedad de sus respectivos titulares y Ud. acuerda no usar o mostrar las
                            mismas de cualquier forma sin la autorización previa por escrito del propietario de la marca
                            comercial en cuestión.</p>

                        <h5>Contenido del visitante</h5>
                        <p>Nosotros nos reservamos el derecho de eliminar el acceso y/o uso del Sitio Web a cualquier
                            usuario y/o visitante del mismo (“Visitante”) que no respete los términos y condiciones
                            establecidos en el presente. Asimismo, nosotros nos reservamos el derecho de eliminar cualquier
                            mensaje que:</p>
                        <ul>
                            <li>Sea ilegal, peligroso, amenazante, abusivo, hostigador, tortuoso, difamatorio, vulgar,
                                obsceno, calumnioso, invasivo de la privacidad de terceros, odioso, discriminatorio, o que
                                de cualquier forma viole derechos de terceros y/o disposiciones legales aplicables</li>
                            <li>Sea contrario a la moral y las buenas costumbres</li>
                            <li>Ofrezca, venda o de cualquier modo comercialice bienes o servicios</li>
                            <li>Ofrezca cualquier actividad que sea lucrativa para el Visitante</li>
                        </ul>
                        <p>Usted se obliga a no utilizar el Sitio Web para lo siguiente:</p>
                        <ul>
                            <li>Dañar a menores de edad en cualquier forma</li>
                            <li>Hacerse pasar por alguna persona o entidad, incluyendo, pero sin limitarse, a un funcionario
                                o empleado de AGROPARTES o hacer declaraciones falsas, o de cualquier otra forma falsificar su
                                asociación a alguna persona o entidad</li>
                            <li>Falsificar encabezados o de cualquier otra forma manipular identificadores para desviar el
                                origen de algún Contenido transmitido por medio del Sitio Web</li>
                            <li>Cargar ("upload"), publicar, enviar por correo electrónico, transmitir, o de cualquier otra
                                forma poner a disposición algún Contenido del cual no tiene el derecho de transmitir por ley
                                o bajo relación contractual o fiduciaria (tal como información interna, de propiedad y
                                confidencial adquirida o entregada como parte de las relaciones de empleo o bajo contratos
                                de confidencialidad)</li>
                            <li>Cargar, publicar, enviar por correo electrónico, transmitir, o de cualquier otra forma poner
                                a disposición algún Contenido que viole alguna patente, marca, secreto comercial, derecho de
                                autor o cualquier derecho de propiedad ("Derechos") de algún tercero</li>
                            <li>Cargar, publicar, enviar por correo electrónico, transmitir o de cualquier otra forma poner
                                a disposición cualquier anuncio no solicitado o no autorizado, materiales promocionales,
                                correo no solicitado ("junk mail", "spam"), cartas en cadena ("chain letters"), esquemas de
                                pirámides ("pyramid schemes") o cualquier otra forma de solicitud, con excepción de aquellas
                                áreas (tales como cuartos de compras, "shopping rooms") que están destinadas para tal
                                propósito</li>
                            <li>Cargar ("upload"), publicar, enviar por correo electrónico, transmitir, o de cualquier otra
                                forma poner a disposición algún material que contenga virus de software, o cualquier otro
                                código de computadora, archivos o programas diseñados para interrumpir, destruir o limitar
                                el funcionamiento de algún software, hardware o equipo de telecomunicaciones</li>
                            <li>Interrumpir el flujo normal de diálogo, hacer que una pantalla se mueva ("scroll") más
                                rápido de lo que otros Visitantes pueden manejar, o de cualquier otra forma actuar de manera
                                que afecte negativamente la habilidad de otros Visitantes para vincularse en intercambios de
                                tiempo reales</li>
                            <li>Interferir o interrumpir el Sitio Web, servidores, o redes conectadas al Sitio Web, o
                                desobedecer cualquier requisito, procedimiento, política o regulación de redes conectadas al
                                Sitio Web</li>
                            <li>Violar con o sin intención alguna ley local, estatal, nacional o internacional aplicable y
                                cualquier otra regulación</li>
                            <li>Acechar o de cualquier otra forma hostigar a un tercero</li>
                            <li>Colectar o guardar datos personales acerca de otros Visitantes</li>
                            <li>Publicar datos personales sin el consentimiento de la persona involucrada</li>
                        </ul>
                        <p>AGROPARTES en ningún caso será responsable por la destrucción o eliminación de la información que los Visitantes incluyan en sus mensajes.</p>

                        <h5>Datos personales</h5>
                        <p>Datos personales es cualquier información que permite identificar a un individuo. Las clases de
                            datos personales que el presente sitio puede recolectar incluyen el nombre y el apellido de la
                            persona, domicilio, número de teléfono, numero de documento y dirección de correo electrónico
                            (datos no
                            sensibles). El titular de este sitio no recabará ningún dato personal sobre su persona a menos
                            que Ud. voluntariamente lo provea o de otro modo lo permita la normativa aplicable sobre
                            protección de datos personales. En consecuencia, quien provee los datos reconoce que proporciona
                            sus datos en forma absolutamente voluntaria y que los mismos son ciertos.
                            El ingreso de los datos personales implica el consentimiento del Visitantes a ceder sus datos y
                            ser parte de la base de datos de las distintas marcas de AGROPARTES. Aquellos que deseen tener
                            acceso a sus datos personales y/o eliminarlos de la base de datos, deberán comunicarse al 0414-8949391 - 0412-1013479.
                        </p>

                        <h5>Otra Información que Ud. envíe</h5>
                        <p>Si Ud. usa las características de comunicación de este Sitio Web para proveernos otra información
                            mas allá de su información personal y datos identificatorios, incluyendo sugerencias acerca del
                            Sitio Web, ideas sobre productos y publicidad, y cualquier otra información relacionada, tales
                            informaciones pasan a pertenecer en forma gratuita a nosotros y pueden ser usadas, reproducidas,
                            modificadas, distribuidas y divulgadas por nosotros de cualquier forma que escojamos.</p>

                        <h5>Descargo de responsabilidad</h5>
                        <p>AGROPARTES no declara ni garantiza que el contenido del sitio web es exacto y completo. Este
                            sitio web y el material, la información, los servicios y los productos en este sitio web,
                            incluyendo, sin carácter limitativo, el texto, los gráficos y los enlaces se proporcionan en el
                            estado en que se encuentran y sin garantías de ningún tipo, ya sean expresas o implícitas. En la
                            mayor medida permitida conforme a la ley aplicable, AGROPARTES niega toda garantía, expresa o
                            implícita, incluyendo, pero sin carácter limitativo, todas las garantías de comercialización o
                            de adecuación para un fin específico, de no violación, de producto libre de virus informáticos,
                            y toda garantía que surja en el curso de la operación o durante el cumplimiento de la misma.
                            AGROPARTES no declara ni garantiza que las funciones contempladas en el sitio web serán
                            ininterrumpidas o que estarán libres de errores, que los defectos serán corregidos o que este
                            sitio web o el servidor que hace que el sitio web esté disponible están libres de virus u otros
                            elementos dañinos. AGROPARTES no efectúa ninguna declaración o garantía respecto del uso del
                            material en este sitio web en cuanto a si el material es completo, correcto, exacto, adecuado,
                            útil, oportuno, confiable. Además de lo precedentemente mencionado, usted (y no AGROPARTES)
                            asume todo el costo de todos los servicios, reparaciones o correcciones que fueran necesarios.
                        </p>

                        <h5>Limitación de responsabilidad</h5>
                        <p>Con el mayor alcance permitido por la legislación aplicable, ud. Entiende y acuerda que ni
                            AGROPARTES ni cualquiera de sus respectivas subsidiarias o afiliadas o terceros proveedores de
                            contenido serán responsables por cualquier daño directo, indirecto, incidental, especial,
                            mediato, inmediato, consecuente, punitivo o cualquier otro, relativos a o resultantes de su uso
                            o su incapacidad de usar este sitio web o cualquier otro sitio web que Ud. Accediera a través de
                            una conexión a partir de este sitio web o de cualquier medida que tomemos o dejemos de tomar
                            como resultado de mensajes de correo electrónico que Ud. Nos envié. Estos incluyen daños por
                            errores, omisiones, interrupciones, defectos, atrasos, virus informáticos, su lucro cesante,
                            perdida de datos, acceso no autorizado a y alteración de sus transmisiones y datos, y otras
                            pérdidas tangibles e intangibles.</p>
                        <p>Esta limitación resulta aplicable independientemente de si los daños y perjuicios fueran
                            reclamados en virtud. de un contrato, como resultado de negligencia o de otro modo, e igualmente
                            si nosotros o nuestros representantes hubieren sido negligentes o hubieren sido informados sobre
                            la posibilidad de tales daños.</p>

                        <h5>Su responsabilidad</h5>
                        <p>Si Ud. Causara una interrupción técnica de este sitio web o de los sistemas que transmiten el
                            sitio web a Ud. Y a otros, Ud. Asume las responsabilidad por todas y cualquier
                            responsabilidades, costos y gastos (incluyendo honorarios de abogados) que surgieran como
                            consecuencia de dicha interrupción.</p>

                        <h5>Jurisdicción</h5>
                        <p>AGROPARTES tiene sede y es operado en Ciudad Boliavar. acepta en forma irrevocable la jurisdicción de los 
                            tribunales de la Ciudad Bolivar, en relación con cualquier acción para la ejecución de estos términos y condiciones.</p>

                        <p>Reconocemos que es posible que Ud. obtenga acceso a este Sitio Web desde cualquier lugar en el
                            mundo, pero no tenemos capacidad práctica para impedir tal acceso. Este Sitio Web fue proyectado
                            para cumplir con las leyes de la República de Venezuela. Los negocios llevados a cabo por las
                            afiliadas da AGROPARTES operan en varios países en todo el mundo y cumplen con las leyes de las
                            jurisdicciones particulares en las cuales las mismas operan. Si cualquier material en este Sitio
                            Web, o el uso de este Sitio Web por Ud. fuera contrario a las leyes del lugar en el cual Ud.
                            estuviera al acceder al mismo, el Sitio Web no está destinado a Ud. y le solicitamos que no
                            utilice el Sitio Web. Ud. es responsable por informarse respecto a las leyes de su jurisdicción
                            y por el cumplimiento de las mismas.</p>

                        <h5>Terminación</h5>
                        <p>Usted acepta que AGROPARTES puede, bajo ciertas circunstancias y sin necesidad de notificación
                            previa, cancelar y terminar inmediatamente su posibilidad de acceso al Sitio Web. Entre las
                            causales de terminación se incluyen, sin limitarse: (a) incumplimientos o violaciones a estos
                            términos y condiciones; (b) requerimientos de autoridades legales o gubernamentales; (c) su
                            solicitud (terminación de cuenta por requerimiento del Visitante); (d) terminación o
                            modificaciones sustanciales al Servicio (o cualquier parte del mismo); (e) problemas técnicos o
                            de seguridad inesperados; (f) períodos de inactividad prolongados. Asimismo, usted acepta que
                            todas las causales de terminación con causa podrán ser invocadas por nosotros a nuestra sola
                            discreción y que no seremos responsables frente a usted ni frente a ningún tercero por cualquier
                            terminación de su cuenta, y las direcciones de correo electrónico asociada o acceso al Sitio
                            Web.</p>

                        <h5>Modificaciones a estos Términos</h5>
                        <p>Hacemos reserva del derecho, a nuestro exclusivo y completo criterio, de alterar estos términos y
                            condicionas en cualquier ocasión, mediante la muestra en el Sitio Web de nuevos términos y
                            condiciones. Es su responsabilidad verificar periódicamente cualquier alteración que pudiéramos
                            realizar sobre estos términos y condiciones. Su uso continuado de este Sitio Web luego de la
                            presentación de nuevos términos y condiciones implicará y significará su aceptación a las
                            modificaciones introducidas. Gracias por visitar nuestro Sitio Web.</p>

                    </div>
                </div>
            </section>

            <div className="Footer">
                <Footer />
            </div>
        </>
    )
}

export default TerminosYCondiciones;