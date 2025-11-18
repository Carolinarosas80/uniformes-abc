import React from "react";
import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";
import CardsGrid from "../components/CardsGrid";
import NuestrosClientes from "../components/NuestrosClientes";

// Secciones destacadas
const sections = [
  {
    title: "Colegios",
    text: "Uniformes escolares durables, cómodos y listos para el uso diario: remeras, chombas, buzos y más.",
    img: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1200&auto=format&fit=crop",
    href: "/colegios",
  },
  {
    title: "Empresas",
    text: "Imagen corporativa prolija y profesional para todo tu equipo: camisas, chombas, pantalones y ropa de trabajo.",
    img: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1200&auto=format&fit=crop",
    href: "/empresas",
  },
  {
    title: "Clubes",
    text: "Indumentaria deportiva personalizada: remeras técnicas, shorts, buzos y conjuntos para clubes y gimnasios.",
    img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1200&auto=format&fit=crop",
    href: "/clubes",
  },
];

export default function Home() {
  return (
    <>
      <Helmet>
        <title>ABC Uniformes | Uniformes para empresas, colegios y clubes</title>
        <meta
          name="description"
          content="Diseñamos, confeccionamos y personalizamos uniformes para colegios, empresas y clubes en toda la Argentina. Calidad, puntualidad y más de 20 años de experiencia."
        />
        <meta
          name="keywords"
          content="uniformes, uniformes escolares, uniformes empresariales, uniformes deportivos, ropa de trabajo, ABC Uniformes"
        />
        <meta name="author" content="CR Web Designer" />

        <meta
          property="og:title"
          content="ABC Uniformes | Uniformes para empresas, colegios y clubes"
        />
        <meta
          property="og:description"
          content="Uniformes que potencian la imagen profesional de tu institución. Calidad, bordado y confección propia."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://abcuniformes.com.ar/" />
      </Helmet>

      <main className="home">

        {/* HERO */}
        <Hero />

        {/* H1 PRINCIPAL */}
        <h1>Uniformes para colegios, empresas y clubes en Argentina</h1>

        {/* PÁRRAFO SEO INTRODUCTORIO */}
        <p className="home-intro">
          En ABC Uniformes diseñamos, confeccionamos y personalizamos uniformes para
          colegios, empresas y clubes de todo el país. Utilizamos telas de calidad,
          técnicas de estampado profesionales y bordados precisos para lograr una
          imagen prolija, cómoda y duradera para cada institución.
        </p>

        {/* SECCIONES */}
        <section className="section" id="secciones">
          <div className="container">
            <h2>Nuestras secciones</h2>
            <CardsGrid items={sections} />
          </div>
        </section>

        {/* CLIENTES */}
        <NuestrosClientes />

      </main>
    </>
  );
}