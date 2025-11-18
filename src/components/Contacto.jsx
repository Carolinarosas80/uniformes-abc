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
          content="Contactanos para presupuestos, consultas y producción de uniformes para empresas, colegios y clubes."
        />
      </Helmet>

      <section className="section contact">
        <div className="container">
          <h1>Contactanos</h1>
          <p>
            Completá el formulario y en breve nos pondremos en contacto contigo.
          </p>

          <div className="card">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}