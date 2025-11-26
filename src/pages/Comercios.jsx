import React from "react";
import { Helmet } from "react-helmet-async";

import comerciosRopa from "../assets/img/comerciosropa.jpg";
import delantalesCofias from "../assets/img/delantalesycofias.jpg";
import buzosCamisasChalecos from "../assets/img/ropadetrabajo.jpg";

export default function Comercios() {
  const gallery = [
    { img: comerciosRopa, title: "Remeras personalizadas" },
    { img: delantalesCofias, title: "Delantales y coﬁas" },
    { img: buzosCamisasChalecos, title: "Buzos, camisas y chalecos" },
  ];

  return (
    <div className="comercios-page">
      <Helmet>
        <title>Uniformes para Comercios | ABC Uniformes</title>
        <meta
          name="description"
          content="Uniformes personalizados para comercios: remeras estampadas, delantales, cofias, buzos, chalecos y camisas. Calidad y confección profesional."
        />
      </Helmet>

      <h1>Uniformes para Comercios</h1>

      <p className="page-intro">
        Diseñamos y confeccionamos uniformes para comercios de todo el país.
        Personalizamos cada prenda con estampado, bordado o DTF, cuidando la
        presentación profesional del equipo.
      </p>

      {/* Galería */}
      <section className="gallery">
        {gallery.map((item, index) => (
          <figure key={index} className="gallery-item">
            <img src={item.img} alt={item.title} />
            <figcaption>{item.title}</figcaption>
          </figure>
        ))}
      </section>

      {/* Cards de información */}
      <section className="info-cards">
        <div className="info-card">
          <h3>Personalización completa</h3>
          <p>
            Realizamos estampado, bordado y DTF para ofrecer la mejor calidad
            en cada uniforme. Adaptamos los diseños a la identidad de tu comercio.
          </p>
        </div>

        <div className="info-card">
          <h3>Calidad y confort</h3>
          <p>
            Usamos telas resistentes, cómodas y pensadas para uso intensivo:
            tusor, gabardina, algodón peinado y más.
          </p>
        </div>

        <div className="info-card">
          <h3>Atención personalizada</h3>
          <p>
            Te asesoramos en talles, colores, materiales y técnicas de impresión
            para que el resultado sea profesional y duradero.
          </p>
        </div>
      </section>
    </div>
  );
}