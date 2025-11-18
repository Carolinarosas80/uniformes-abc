import React from "react";
import { Helmet } from "react-helmet-async";
import ContactForm from "../components/ContactForm";

export default function Contacto() {
  return (
    <>
      <Helmet>
        <title>Contacto | ABC Uniformes</title>
        <meta
          name="description"
          content="Contactanos para presupuestos mayoristas de uniformes para empresas, colegios, clubes y comercios."
        />
      </Helmet>

      <section className="section contact">
        <div className="container">
          <h2>Contacto</h2>
          <p>
            Completá el formulario para solicitar un presupuesto mayorista.
            Te responderemos a la brevedad.
          </p>

          <ContactForm />
        </div>
      </section>
    </>
  );
}