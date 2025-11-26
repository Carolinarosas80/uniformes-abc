import React from "react";
import { Helmet } from "react-helmet-async";

// IMPORTS: asegurate que los archivos estén en src/assets/img/
import camisas from "../assets/img/camisasychombasempresas.jpg";
import ambos from "../assets/img/ambos.jpg";
import pantalones from "../assets/img/pantalonesdeobra.jpg";
import camperones from "../assets/img/camperon.jpg";

export default function Empresas() {
  const gallery = [
    { src: camisas, alt: "Camisas y chombas corporativas" },
    { src: ambos, alt: "Conjuntos corporativos (ambos)" },
    { src: pantalones, alt: "Pantalones de obra y ropa técnica" },
    { src: camperones, alt: "Camperones y prendas exteriores" },
  ];

  return (
    <>
      <Helmet>
        <title>Uniformes Empresariales | ABC Uniformes</title>
        <meta
          name="description"
          content="Soluciones de indumentaria corporativa: chombas, camisas, pantalones de trabajo y camperones. Personalización con logo y bordado."
        />
        <meta
          name="keywords"
          content="uniformes empresariales, chombas corporativas, camisas de empresa, pantalones de obra, camperones, ABC Uniformes"
        />
        <meta property="og:title" content="Uniformes Empresariales | ABC Uniformes" />
        <meta
          property="og:description"
          content="Indumentaria para empresas y personal de trabajo: chombas, camisas, pantalones técnicos y camperones con personalización."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://abcuniformes.com.ar/empresas" />
      </Helmet>

      <main className="empresas-page container">
        <h1>Uniformes empresariales y ropa de trabajo</h1>

        <p className="page-intro">
          En ABC Uniformes confeccionamos indumentaria corporativa para distintos rubros:
          chombas y camisas para atención al público, pantalones técnicos para obra e
          industria, y camperones para trabajo en exterior. Ofrecemos bordado, estampado
          y soluciones por volumen.
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
                <h3>Chombas y camisas</h3>
                <p>Modelos en pique y popelina para atención al cliente y staff.</p>
              </div>
            </div>

            <div className="card">
              <div className="content">
                <h3>Pantalones técnicos</h3>
                <p>Resistencia y confort para entornos industriales y de obra.</p>
              </div>
            </div>

            <div className="card">
              <div className="content">
                <h3>Camperones y ropa exterior</h3>
                <p>Prendas de abrigo y protección para trabajo al aire libre.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}