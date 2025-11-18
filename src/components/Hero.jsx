import React from "react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero">
      <div className="container wrap">
        {/* Texto principal */}
        <div>
          <h1>Uniformes que potencian tu imagen profesional</h1>

          <p>
            Más de 20 años de experiencia en uniformes para empresas, colegios,
            clubes y comercios. Combinamos calidad, diseño y puntualidad en cada
            entrega.
          </p>

          <div className="badges">
            <span className="badge">+20 años de trayectoria</span>
            <span className="badge">Sublimado / DTF</span>
            <span className="badge">Bordados y estampados</span>
            <span className="badge">Envíos a todo el país</span>
            <span className="badge">Atención personalizada</span>
            <span className="badge">Calidad garantizada</span>


          </div>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link to="/contacto" className="btn">
              Contactanos
            </Link>
            <Link to="/colegios" className="btn ghost">
              Ver secciones
            </Link>
          </div>
        </div>

        {/* Imagen hero */}
        <div className="image">
          <img
            src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=1400&auto=format&fit=crop"
            alt="Uniformes de trabajo y corporativos"
          />
        </div>
      </div>
    </section>
  );
}