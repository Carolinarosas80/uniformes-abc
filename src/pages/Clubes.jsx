import React from "react";
import { Helmet } from "react-helmet-async";
import CardsGrid from "../components/CardsGrid";

const items = [
  {
    title: "Remeras y musculosas deportivas",
    text: "Para básquet, fútbol y entrenamiento general, con tu escudo y sponsor.",
    img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "Buzos y camperas deportivas",
    text: "Abrigo para banco de suplentes, staff y delegaciones.",
    img: "https://images.unsplash.com/photo-1526401485004-2fa806b5e4f9?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "Pantalones y shorts",
    text: "Uniformes completos para juego, entrenamiento o viajes del plantel.",
    img: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&w=1200&auto=format&fit=crop"
  }
];

export default function Clubes() {
  return (
    <>
      <Helmet>
        <title>Clubes | ABC Uniformes</title>
        <meta
          name="description"
          content="Uniformes para clubes deportivos: remeras, musculosas, buzos, camperas, shorts y pantalones personalizados."
        />
      </Helmet>

      <section className="section">
        <div className="container">
          <h2>Clubes</h2>
          <p>
            Diseñamos y producimos indumentaria deportiva para clubes, escuelas de deporte 
            y equipos amateurs o profesionales, con bordado, estampado o sublimado.
          </p>

          <CardsGrid items={items} />
        </div>
      </section>
    </>
  );
}