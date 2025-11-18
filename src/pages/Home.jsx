import React from "react";
import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";
import CardsGrid from "../components/CardsGrid";
import NuestrosClientes from"../components/NuestrosClientes";
// De momento uso imágenes online para evitar errores de ruta.
// Luego, si querés, las cambiamos por imports de /assets/img.
const sections = [
  {
    title: "Colegios",
    text: "Uniformes escolares durables, cómodos y listos para el uso diario.",
    img: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1200&auto=format&fit=crop",
    href: "/colegios",
  },
  {
    title: "Empresas",
    text: "Imagen corporativa prolija y profesional para todo tu equipo.",
    img: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=1200&auto=format&fit=crop",
    href: "/empresas",
  },
  {
    title: "Clubes",
    text: "Indumentaria deportiva personalizada: remeras, shorts, buzos y más.",
    img: "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=1200&auto=format&fit=crop",
    href: "/clubes",
  },
];

export default function Home() {
  return (
    <>
      <Helmet>
        <title>ABC Uniformes | Uniformes para Empresas, Colegios y Comercios</title>
        <meta
          name="description"
          content="Más de 20 años de experiencia en diseño, confección y personalización de uniformes para empresas, colegios, clubes y comercios. Envíos a todo el país."
        />
        <meta
          name="keywords"
          content="uniformes, colegios, empresas, clubes, comercios, bordados, sublimado, DTF, confección, Argentina, ABC Uniformes"
        />
        <meta name="author" content="CR Web Designer" />

        <meta
          property="og:title"
          content="ABC Uniformes | Uniformes para Empresas, Colegios y Comercios"
        />
        <meta
          property="og:description"
          content="Uniformes que potencian tu imagen profesional con más de 20 años de trayectoria. Calidad, diseño y puntualidad."
        />
        <meta property="og:type" content="website" />
        {/* Cuando lo subas al hosting, actualizá la URL si es otra */}
        <meta property="og:url" content="https://abcuniformes.com.ar/" />
      </Helmet>

      <Hero />

      <section className="section" id="secciones">
        <div className="container">
          <h2>Nuestras secciones</h2>
          <CardsGrid items={sections} />
        </div>
      </section>
      <NuestrosClientes />
    </>
  );
}