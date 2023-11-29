import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import NavInfo from "../../components/NavInfo/NavInfo";

const Envios = () => {
    return (
        <>
            <Header />
            <section class="container">
            <div class="row row-cols-1 row-cols-sm-2">

                <NavInfo />
                
                <div class="datos-ifo col-sm-9">
                    <h5>Envios y devoluciones</h5>
                    <p>Envío del paquete
                        Como norma general, los paquetes se envían máximo dentro de los 3 días hábiles siguientes a la
                        recepción del pago.
    
                        Los gastos de envío incluyen los gastos de manipulación y empaquetado, así como los gastos postales.
                        Los gastos de manipulación tienen un precio fijo, mientras que los gastos de transporte pueden
                        variar según el peso total del paquete. Te aconsejamos que agrupes todos tus artículos en un mismo
                        pedido. No podemos combinar dos pedidos diferentes, y los gastos de envío se aplicarán para cada uno
                        de manera individual. No nos hacemos responsables de los daños que pueda sufrir tu paquete tras el
                        envío, pero hacemos todo lo posible para proteger todos los artículos.
                        tus artículos estarán bien protegidos.</p>
    
                    <h5>Devoluciones</h5>
                    <p>s fundamental que conserves el empaque original, pues es tan importante como el producto mismo;
                        cuídalo, guárdalo y manipúlalo con el mayor de los cuidados, de esta forma no tendrás ningún
                        inconveniente al momento de realizar la devolución.
                        Por favor, ten en cuenta que si no conservas el empaque original, o si éste se encuentra en mal
                        estado, tu devolución será rechazada.
                        Una vez que recibamos tu producto, realizaremos un control de calidad en el siguiente día hábil para
                        determinar su estado. </p>
    
                    <h5>Artículos que no cumplen con las especificaciones de cliente</h5>
                    <p>Productos usados o sin usar que al momento de verificar la codificación del producto presentan
                        diferentes características a las ofrecidas; Este producto puede ser enviado a "nombre tienda" por
                        publicidad engañosa, se enviara informe a contenido, Operaciones y comercial para que estos retiren
                        el producto de la página y a la vez realicen el seguimiento.</p>
                </div>
            </div>
        </section>

            <div className="Footer">
            <Footer />
            </div>
        </>
    )
}

export default Envios;