import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; 
import Home from "./pages/Home";
import Colegios from "./pages/Colegios";
import Clubes from "./pages/Clubes";
import Empresas from "./pages/Empresas";
import Comercios from "./pages/Comercios";
import Contacto from "./pages/Contacto";
import NuestrosClientes from "./components/NuestrosClientes";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  return (
    <>
      {/* NAVBAR SIEMPRE ARRIBA */}
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/colegios" element={<Colegios />} />
          <Route path="/clubes" element={<Clubes />} />
          <Route path="/empresas" element={<Empresas />} />
          <Route path="/comercios" element={<Comercios />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>

      {/* BOTÓN FLOTANTE DE WHATSAPP */}
      <WhatsAppButton />

      {/* FOOTER FINAL */}
      <Footer />

      {/* OPCIONAL: CLIENTES — si querés mostrarlo abajo de todo, activalo */}
      {/* <NuestrosClientes /> */}
    </>
  );
}