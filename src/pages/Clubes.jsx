import React from "react";
import { Helmet } from "react-helmet-async";

// Imports: asegurate que los archivos existan en src/assets/img/
import camperas from "../assets/img/camperasybuzosclubes.jpg";
import remeras from "../assets/img/remerasymuscuclubes.jpg";
import shorts from "../assets/img/shortypantalonclub.jpg";

export default function Clubes() {
  const gallery = [
    { src: remeras, alt: "Remeras y musculosas deportivas" },
    { src: camperas, alt: "Camperas y buzos para clubes" },
    { src: shorts, alt: "Pantalones y shorts deportivos" },
  ];

  return (
    <>
      <Helmet>
        <title>Indumentaria Deportiva para Clubes | ABC Uniformes</title>
        <meta
          name="description"
          content="Indumentaria deportiva personalizada para clubes: remeras técnicas, musculosas, shorts, buzos y conjuntos. Confección y personalización con logo."
        />
        <meta
          name="keywords"
          content="indumentaria deportiva, remeras deportivas, uniformes para clubes, camiseta deportiva, ABC Uniformes"
        />
        <meta property="og:title" content="Indumentaria Deportiva para Clubes | ABC Uniformes" />
        <meta
          property="og:description"
          content="Equipamiento completo para clubes: remeras técnicas, shorts, buzos y personalización con estampado o bordado."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://abcuniformes.com.ar/clubes" />
      </Helmet>

      <main className="clubes-page container">
        <h1>Indumentaria deportiva personalizada para clubes</h1>

        <p className="page-intro">
          Diseñamos y confeccionamos indumentaria deportiva para clubes, academias y
          equipos: remeras técnicas, musculosas, shorts, buzos y camperas.
          Ofrecemos sublimado, DTF y bordado profesional, con foco en comodidad y
          durabilidad para entrenamientos y competencias.
        </p>

        {/* GALERÍA */}
        <section className="section">
          <div className="gallery">
            {gallery.map((item, idx) => (
              <figure className="gallery-item" key={idx}>
                <img src={item.src} alt={item.alt} loading="lazy" decoding="async" />
                <figcaption>{item.alt}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* CARDS INFO */}
        <section className="section">
          <div className="grid">
            <div className="card">
              <div className="content">
                <h3>Remeras técnicas</h3>
                <p>Telas respirables y corte atlético para rendimiento.</p>
              </div>
            </div>

            <div className="card">
              <div className="content">
                <h3>Buzos y camperas</h3>
                <p>Modelos de abrigo para pre-competencia y staff técnico.</p>
              </div>
            </div>

            <div className="card">
              <div className="content">
                <h3>Pantalones y short</h3>
                <p>Confort y libertad de movimiento para los entrenamientos.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}