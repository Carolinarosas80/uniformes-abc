import React from "react";
import ecosan from "../assets/logos/ecosan.jpg";
import austral from "../assets/logos/austral.jpg";
import cocacola from "../assets/logos/cocacola.jpg";
import centraloeste from "../assets/logos/centraloeste.jpg";
import fundacionguemes from "../assets/logos/fundacionguemes.jpg";
import granix from "../assets/logos/granix.jpg";
import pedidosya from "../assets/logos/pedidosya.jpg";
import rubendario from "../assets/logos/rubendario.jpg";
import obras from "../assets/logos/obras.jpg";
import sagb from "../assets/logos/sagb.jpg";
import inmaculada from "../assets/logos/inmaculada.jpg";
import isa from "../assets/logos/isa.jpg";

export default function NuestrosClientes() {

  const logos = [
 
    { src: ecosan, alt: "Ecosan" },
    { src: austral, alt: "Austral" },
    { src: cocacola, alt: "Coca-Cola" },
    { src: centraloeste, alt: "Central Oeste" },
    { src: fundacionguemes, alt: "Fundación Güemes" },
    { src: granix, alt: "Granix" },
    { src: pedidosya, alt: "PedidosYa" },
    {src: rubendario, alt: "Rubén Darío" },
    {src: obras, alt: "Obras Sanitarias" },
    {src: sagb, alt:"SAGB" },
    {src: inmaculada, alt:"Inmaculada Concepción" },
    {src: isa, alt:"ISA" },
  ];
  return (
    <section className="section clientes" aria-label="Empresas que confían en nosotros">
      <div className="container">
        <h2>Empresas que confían en nosotros</h2>

        <div className="clients-logos" role="list">
          {logos.map((logo, i) => (
            <div key={i} role="listitem" className="client-logo">
              <img
                src={logo.src}
                alt={logo.alt}
                loading="lazy"
                decoding="async"
                style={{ maxWidth: 150 }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}