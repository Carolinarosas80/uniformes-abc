import React from "react";
import ecosan from "../assets/logos/ecosan.jpg";
import austral from "../assets/logos/austral.jpg";
import cocacola from "../assets/logos/cocacola.jpg";
import centraloeste from "../assets/logos/centraloeste.jpg";
import fundacionguemes from "../assets/logos/fundacionguemes.jpg";
import granix from "../assets/logos/granix.jpg";
import pedidosya from "../assets/logos/pedidosya.jpg";
import rossi from "../assets/logos/rossi.jpg";
import uthgra from "../assets/logos/uthgra.jpg";
import aitue from "../assets/logos/aitue.jpg";
import rosmi from "../assets/logos/rosmi.jpg";
import rubendario from "../assets/logos/rubendario.jpg";
import obras from "../assets/logos/obras.jpg";
import inmaculada from "../assets/logos/inmaculada.jpg";
import ib from "../assets/logos/ib.jpg";
import jn from "../assets/logos/jn.jpg";
import sagb from "../assets/logos/sagb.jpg";
import oip  from "../assets/logos/oip.jpg";


export default function NuestrosClientes() {

  const logos = [
 
    { src: ecosan, alt: "Ecosan" },
    { src: austral, alt: "Austral" },
    { src: cocacola, alt: "Coca-Cola" },
    { src: centraloeste, alt: "Central Oeste" },
    { src: fundacionguemes, alt: "Fundación Güemes" },
    { src: granix, alt: "Granix" },
    { src: pedidosya, alt: "PedidosYa" },
    {src: uthgra, alt: "UTHGRA" },
    {src: aitue, alt: "Aitue" },
    {src: rossi, alt:"ROSSI" },
    {src: rosmi, alt:"Rosmi"},
    {src: rubendario, alt: "Rubén Darío" },
    {src: obras, alt: "Obras Sanitarias" },
    {src: inmaculada, alt:"Inmaculada Concepción" },
    {src: ib, alt:"IB" }, 
    {src: jn, alt: "JN" },
    {src: sagb, alt:"SAGB" },
    {src: oip , alt:"OIP" },
    
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