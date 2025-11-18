import React from "react";
import { Helmet } from "react-helmet-async";
import CardsGrid from "../components/CardsGrid";

const items = [
  {
    title: "Chombas y remeras",
    text: "Confección en algodón y poliéster en colores institucionales, listas para el uso diario.",
    img: "https://images.unsplash.com/photo-1519378058457-4c29a0a2ef48?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "Buzos y camperas",
    text: "Abrigos escolares cómodos, con bordado del escudo y terminaciones profesionales.",
    img: "https://images.unsplash.com/photo-1520975911878-8a69d3d7d32b?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "Pantalones y shorts",
    text: "Textiles resistentes y confortables, pensados para el movimiento diario.",
    img: "https://images.unsplash.com/photo-1604882736241-8f68d2a76e45?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "Polleras y uniformes deportivos",
    text: "Prendas livianas y transpirables para educación física y uso escolar.",
    img: "https://images.unsplash.com/photo-1524492449092-2d8c3c0317c1?q=80&w=1200&auto=format&fit=crop"
  }
];

export default function Colegios() {
  return (
    <>
      <Helmet>
        <title>Colegios | ABC Uniformes</title>
        <meta
          name="description"
          content="Uniformes escolares personalizados para colegios: chombas, remeras, buzos, pantalones, shorts y polleras deportivas."
        />
      </Helmet>

      <section className="section">
        <div className="container">
          <h2>Colegios</h2>
          <p>
            Uniformes escolares diseñados para acompañar el día a día de alumnos y docentes, 
            combinando comodidad, durabilidad e imagen institucional.
          </p>

          <CardsGrid items={items} />
        </div>
      </section>
    </>
  );
}