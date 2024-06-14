import React from "react";
import FormAddProducts from '../../components/FormAddProducts/FormAddProducts'
import UpdateProducts from "../../components/UpdateProducts/UpdateProducts";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const AddProducts = () => {
    return (
        <>
            <Header />
            <div className="container addAndUpdateProducts">
                <div className="row addAndUpdateProducts-1">
                    <div className="col addAndUpdateProducts-2">
                        <h1>AGREGAR PRODUCTO</h1>
                        <FormAddProducts />
                    </div>
                    <div className="col addAndUpdateProducts-2">
                        <h1>ACTUALIZAR PRODUCTO</h1>
                        <UpdateProducts />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )

}

export default AddProducts;