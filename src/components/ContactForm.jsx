import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  // 🔑 Inicializamos EmailJS UNA SOLA VEZ
  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSent(false);

    const formEl = formRef.current;

    try {
      // 📩 ÚNICO ENVÍO: mail al cliente
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_CONTACT,
        formEl
      );

      setSent(true);
      formEl.reset();
    } catch (err) {
      console.error("EmailJS ERROR:", err);
      alert(
        "No se pudo enviar el formulario. Por favor, intentá nuevamente."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card">
      <div className="content">
        <h3>Solicitá tu presupuesto mayorista</h3>
        <p>Completá los datos y te contactamos a la brevedad.</p>

        {!sent ? (
          <form ref={formRef} className="form" onSubmit={handleSubmit}>
            <input
              className="input"
              type="text"
              name="name"
              placeholder="Nombre y apellido"
              required
            />

            <input
              className="input"
              type="email"
              name="email"
              placeholder="Email"
              required
            />

            <input
              className="input"
              type="tel"
              name="phone"
              placeholder="Teléfono / WhatsApp"
            />

            <select className="select" name="category" defaultValue="" required>
              <option value="" disabled>
                Motivo de la consulta
              </option>
              <option value="Colegios">Colegios</option>
              <option value="Empresas">Empresas</option>
              <option value="Clubes">Clubes</option>
              <option value="Comercios">Comercios</option>
              <option value="Otro">Otro</option>
            </select>

            <input
              className="input"
              type="text"
              name="who"
              placeholder="¿Por quién consultás? (curso, sector, sede, etc.)"
            />

            <textarea
              className="textarea"
              name="message"
              placeholder="Contanos qué tipo de prendas necesitás, cantidades estimadas, plazos, etc."
              required
            />

            <label style={{ fontSize: "0.85rem", color: "#666" }}>
              Adjuntar archivo (opcional)
            </label>
            <input className="file" type="file" name="attachment" />

            <button className="btn" type="submit" disabled={loading}>
              {loading ? "Enviando..." : "Enviar formulario"}
            </button>
          </form>
        ) : (
          <p>
            <strong>¡Gracias!</strong> Tu consulta fue enviada correctamente.
            Te vamos a responder a la brevedad.
          </p>
        )}
      </div>
    </div>
  );
}