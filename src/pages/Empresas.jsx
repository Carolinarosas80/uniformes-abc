import React from "react";
import { Helmet } from "react-helmet-async";
import CardsGrid from "../components/CardsGrid";

const items = [
  {
    title: "Remeras y chombas corporativas",
    text: "Ideal para atención al público, eventos y equipo comercial.",
    img: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "Ambos, chaquetas y guardapolvos",
    text: "Soluciones para salud, laboratorios y rubros de servicio.",
    img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "Pantalones de trabajo",
    text: "Textiles resistentes tipo industria, estilo Pampero, para uso intensivo.",
    img: "https://images.unsplash.com/photo-1521093470119-a3acdc43374a?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "Camperas y chalecos corporativos",
    text: "Abrigo institucional con bordado del logo y colores de marca.",
    img: "https://images.unsplash.com/photo-1460931720962-05d08a57299b?q=80&w=1200&auto=format&fit=crop"
  }
];

export default function Empresas() {
  return (
    <>
      <Helmet>
        <title>Empresas | ABC Uniformes</title>
        <meta
          name="description"
          content="Uniformes corporativos para empresas: remeras, chombas, camperas, pantalones de trabajo y ambos profesionales."
        />
      </Helmet>

      <section className="section">
        <div className="container">
          <h2>Empresas</h2>
          <p>
            Acompañamos la identidad de tu marca con uniformes corporativos que combinan 
            presencia, comodidad y funcionalidad para cada puesto de trabajo.
          </p>

          <CardsGrid items={items} />
        </div>
      </section>
    </>
  );
}