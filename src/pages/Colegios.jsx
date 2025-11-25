import React from "react";
import { Helmet } from "react-helmet-async";

// importa las imágenes desde src/assets/img
import chombas from "../assets/img/chombasyremeras.jpg";
import camperas from "../assets/img/camperasybuzoscolegios.jpg";
import polleras from "../assets/img/polleras.jpg"; 
import shorts from "../assets/img/shortypantalones.jpg";

export default function Colegios() {
  const gallery = [
    { src: chombas, alt: "Chombas y remeras escolares" },
    { src: camperas, alt: "Camperas y buzos escolares" },
    { src: polleras, alt: "Faldas y polleras escolares" },
    { src: shorts, alt: "Shorts y pantalones deportivos" },
  ];

  return (
    <>
      <Helmet>
        <title>Uniformes Escolares | ABC Uniformes</title>
        <meta
          name="description"
          content="Uniformes escolares personalizados: remeras, chombas, buzos, camperas y pantalones. Calidad, bordado profesional y entrega puntual."
        />
        <meta
          name="keywords"
          content="uniformes escolares, remeras escolares, chombas escolares, buzos escolares, uniformes para colegios, ABC Uniformes"
        />
        <meta property="og:title" content="Uniformes Escolares | ABC Uniformes" />
        <meta
          property="og:description"
          content="Confección de uniformes escolares de calidad: remeras, buzos, pantalones y más. Personalización con bordado o estampado."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://abcuniformes.com.ar/colegios" />
      </Helmet>

      <main className="colegios-page container">
        <h1>Uniformes escolares personalizados</h1>

        <p className="page-intro">
          En ABC Uniformes confeccionamos uniformes escolares con telas de alta calidad,
          durabilidad y comodidad para el uso diario. Remeras, chombas, buzos, camperas y
          pantalones con opción de bordado o estampado del escudo institucional.
        </p>

        {/* GALERÍA / IMÁGENES DESTACADAS */}
        <section className="section">
          <div className="gallery">
            {gallery.map((item, idx) => (
              <figure className="gallery-item" key={idx}>
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                />
                <figcaption>{item.alt}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* contenido adicional (cards) */}
        <section className="section">
          <div className="grid">
            <div className="card">
              <div className="content">
                <h3>Remeras y chombas</h3>
                <p>Algodón y pique con opción de bordado del escudo.</p>
              </div>
            </div>
            <div className="card">
              <div className="content">
                <h3>Buzos y camperas</h3>
                <p>Modelos cálidos y duraderos, con cierre o canguro.</p>
              </div>
            </div>
            <div className="card">
              <div className="content">
                <h3>Pantalones y deportivos</h3>
                <p>Shorts, jogging y conjuntos deportivos para educación física.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}