import React from "react";
import { FaInstagram, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container inner">

        {/* --- INFORMACIÓN PRINCIPAL --- */}
        <div className="info">
          <h3>ABC Uniformes</h3>

          <p>
            <FaMapMarkerAlt />{" "}
            <a
              href="https://www.google.com/maps?q=Int.+Witcomb+1678,+Villa+Ballester,+Buenos+Aires"
              target="_blank"
              rel="noreferrer"
            >
              Int. Witcomb 1678 — Villa Ballester
            </a>
          </p>

          <p>
            <FaWhatsapp />{" "}
            <a href="https://wa.me/541135078079" target="_blank" rel="noreferrer">
              011 3507 8079
            </a>
          </p>

          <p>
            <FaEnvelope />{" "}
            <a href="mailto:ventas@uniformes.com.ar">
              ventas@uniformes.com.ar
            </a>
          </p>

          <p>
            <FaInstagram />{" "}
            <a
              href="https://instagram.com/abc.uniformes"
              target="_blank"
              rel="noreferrer"
            >
              @abc.uniformes
            </a>
          </p>
        </div>

        {/* --- MAPA --- */}
        <div className="map-wrapper">
          <iframe
            title="Mapa ABC Uniformes"
            src="https://www.google.com/maps?q=Int.+Witcomb+1678,+Villa+Ballester,+Buenos+Aires&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* --- CRÉDITOS --- */}
        <div className="creditos">
          © {new Date().getFullYear()} ABC Uniformes — Todos los derechos reservados.
          <br />
          Diseño y Desarrollo Web por{" "}
          <a
            href="https://instagram.com/crweb.designer"
            target="_blank"
            rel="noreferrer"
          >
            CR Web Designer
          </a>{" "}
          · 01130036062
        </div>
      </div>
    </footer>
  );
}