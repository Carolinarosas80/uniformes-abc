import React from "react";

export default function NuestrosClientes() {
  const logos = [
    "/assets/logos/aitue.jpg",
    "/assets/logos/austral.jpg",
    "/assets/logos/cocacola.jpg",
    "/assets/logos/farmacia.jpg",
    "/assets/logos/fundacionguemes.jpg",
    "/assets/logos/granix.jpg",
    "/assets/logos/guemes.jpg",
  ];

  return (
    <section className="section clientes">
      <div className="container">
        <h2>Empresas que confían en nosotros</h2>

        <div className="clients-logos">
          {logos.map((src, i) => (
            <img key={i} src={src} alt={`Cliente ${i + 1}`} />
          ))}
        </div>
      </div>
    </section>
  );
}