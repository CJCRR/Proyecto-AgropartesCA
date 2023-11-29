import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";


const Nosotros = () => {
  return (
    <>
    <Header />

    <div className="nosotros">
      <section class="p-nosotros">
        <h2>QUIENES SOMOS...</h2>
        <p>Somos una empresa con 8 años de experiencia, dedicada a la comercialización de repuestos de alto nivel para
            camiones y tractores diesel. Contamos con una amplia variedad de productos para satisfacer las necesidades
            de todos nuestros clientes, brindándole calidad, confianza, mejor atención y asesoramiento personalizado al
            momento de realizar tus compras.</p>
      </section>
      <section class="p2-nosotros">
      <div class="box-2">
            <h2>MISION</h2>
            <p>Distribuir repuestos garantizando calidad, originalidad de las marcas
                ofrecidas, precios competitivos y sostenibilidad con nuestros clientes, proveedores, colaboradores, la
                sociedad y con el medio ambiente.</p>
        </div>
        <div class="box-2">
            <h2>VISION</h2>
            <p>Llegar a nuestros clientes en todo el territorio nacional con el más alto nivel de calificación y de experiencia en repuestos de maquinaria pesada.</p>
        </div>
        <div class="container">
            <div class="row align-items-center justify-content-around py-4 sec-clients d-none d-md-block">
                
                <a href="#" class="col-sm-5 col-md-2">
                    <img src="https://res.cloudinary.com/dgvz62cer/image/upload/v1698938280/john-deere-logo_czzn0z.png" alt="" class=""/>
                </a>
                <a href="#" class="col-sm-5 col-md-2">
                    <img src="https://res.cloudinary.com/dgvz62cer/image/upload/v1698938280/Mitsubishi_motors_new_logo.svg_lm1qid.png" alt="" class=""/>
                </a>          <a href="#" class="col-sm-5 col-md-2">
                    <img src="https://res.cloudinary.com/dgvz62cer/image/upload/v1698938278/ford_bzvwwf.png" alt="" class=""/>
                </a>
                <a href="#" class="col-sm-5 col-md-2">
                    <img src="https://res.cloudinary.com/dgvz62cer/image/upload/v1698938283/toyota-dyna-seeklogo_pu373b.png" alt="" class=""/>
                </a>
                <a href="#" class="col-sm-5 col-md-2">
                    <img src="https://res.cloudinary.com/dgvz62cer/image/upload/v1698938280/LOGO_ENCAVA_pjtjoo.png" alt="" class=""/>
                </a>
                <a href="#" class="col-sm-5 col-md-2">
                    <img src="https://res.cloudinary.com/dgvz62cer/image/upload/v1698938280/Isuzu-logo-1991-3840x2160_dbad1e.png" alt="" class=""/>
                </a>
                <a href="#" class="col-sm-5 col-md-2">
                    <img src="https://res.cloudinary.com/dgvz62cer/image/upload/v1701092145/cummins-PhotoRoom.png-PhotoRoom_1_m3omcb.png" alt="" class=""/>
                </a>
                <a href="#" class="col-sm-5 col-md-2">
                    <img src="https://res.cloudinary.com/dgvz62cer/image/upload/v1701101739/pngwing.com_m0yumu.png" alt="" class=""/>
                </a>
                
                
            </div>
        </div>
      </section>
    </div>
      
      <div className="Footer">
        <Footer />
      </div>
    </>
  );
};

export default Nosotros;
