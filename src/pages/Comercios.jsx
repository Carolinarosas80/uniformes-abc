import React from "react";
import { Helmet } from "react-helmet-async";
import CardsGrid from "../components/CardsGrid";

const items = [
  {
    title: "Remeras personalizadas",
    text: "Para locales, eventos, promociones o pequeños negocios.",
    img: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "Buzos y chalecos",
    text: "Abrigo personalizado con tu marca, ideal para atención al público.",
    img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "Camperas y camperones",
    text: "Gastronomía, talleres, logística y rubros con uso intensivo.",
    img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1200&auto=format&fit=crop"
  }
];

export default function Comercios() {
  return (
    <>
      <Helmet>
        <title>Comercios | ABC Uniformes</title>
        <meta
          name="description"
          content="Indumentaria personalizada para comercios, pequeños negocios, eventos y emprendedores."
        />
      </Helmet>

      <section className="section">
        <div className="container">
          <h2>Comercios</h2>
          <p>
            Uniformes y prendas personalizadas para que tu comercio se destaque, 
            manteniendo una imagen prolija y coherente con tu marca.
          </p>

          <CardsGrid items={items} />
        </div>
      </section>
    </>
  );
}