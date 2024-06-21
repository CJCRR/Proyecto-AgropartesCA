import { Form, Formik } from "formik";
import { addNewOrder } from "../../utils/firebaseFetching";
import { useCartContext } from "../../context/CartState";
import { serverTimestamp } from "firebase/firestore";
import TextField from "./TextField";
import * as Yup from "yup";
import { useState } from "react";
import ButtonLoader from "../Loader/ButtonLoader";


const CheckoutForm = ({ setId }) => {
  const { items } = useCartContext();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (values, resetForm) => {
    setLoading(true);
    const orderTotal = items.reduce((total, item) => total + item.price * item.quantity, 0);
    const order = {
      purcharse_data: {
        firsName: values.firstName,
        lastName: values.lastName,
        email: values.email.toLowerCase(),
        dni: values.dni,
      },
      products: items,
      date: serverTimestamp(),
      total: orderTotal,
    };
    const orderId = await addNewOrder(order);
      setId(orderId);
      resetForm({ values: "" });
      setLoading(false);
      redirectToWhatsApp(values, order, orderId);     
  };

  const redirectToWhatsApp = (values, order, orderId) => {
    const { firstName, lastName, email, dni } = values;
    const { products, total } = order;
  
    const productList = products.map((product) => `- ${product.title} (Cantidad: ${product.quantity}, Precio: $${product.price})\n`).join("");
  
    const message = `Hola, acabo de realizar un pedido, \nNro.orden: ${orderId}\nNombre: ${firstName} ${lastName}\nCorreo electrónico: ${email}\nCedula: ${dni}\nProductos:\n${productList}\nTotal: $${total}\n`;
    const whatsappUrl = `https://wa.me/+584148949391?text=${encodeURIComponent(message)}`;
  
    window.open(whatsappUrl, "_blank");
  };

  const emailRegEx = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, "Debe tener 15 caracteres o menos.")
      .required("Esta informacino es requerida"),
    lastName: Yup.string()
      .max(15, "Debe tener 15 caracteres o menos.")
      .required("Esta informacino es requerida"),
    email: Yup.string()
      .email("El correo electrónico es invalido", emailRegEx)
      .required("Correo electronico es requerido"),
    dni: Yup.string()
      .oneOf([Yup.ref("dni"), null], "Verifique su cedula")
      .required("Se requiere su documento de identidad"),
  });

  return (
    <>
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          dni: "",
        }}
        validationSchema={validate}
        onSubmit={(values, { resetForm }) => {
          handleSubmit(values, resetForm);
        }}
      >
        {(formik) => (
          <Form className="form">
            <div className="form__group">
              <TextField showAs="field2"
                label="First name"
                name="firstName"
                type="text"
                className="form__item"
              />
              <TextField showAs="field2"
                label="Last name"
                name="lastName"
                type="text"
                className="form__item"
              />
            </div>
            <TextField label="Email" name="email" type="text" />
            <TextField label="Cedula" name="dni" type="text" />
            <button type="submit" className="form__submit">
              {loading ? <ButtonLoader /> : "Completar compra"}
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default CheckoutForm;
