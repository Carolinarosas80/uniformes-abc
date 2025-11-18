import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSent(false);

    const formEl = formRef.current;
    const data = new FormData(formEl);

    const nombre = data.get("name") || "";
    const email = data.get("email") || "";
    const telefono = data.get("phone") || "";
    const categoria = data.get("category") || "";
    const porQuien = data.get("who") || "";
    const mensaje = data.get("message") || "";

    try {
      // 👉 ENVÍO POR EMAILJS (GMAIL)
      await emailjs.sendForm(
        "service_xxxxxx",     // 🔹 tu Service ID de EmailJS
        "template_xxxxxx",    // 🔹 tu Template ID
        formEl,
        "public_key_xxxxxx"   // 🔹 tu Public Key
      );

      // 👉 ARMAMOS MENSAJE PARA WHATSAPP
      const whatsappMessage = `
Hola, soy ${nombre}.

Motivo de la consulta: ${categoria}
Por quién consulto: ${porQuien}

Mensaje:
${mensaje}

Email: ${email}
Teléfono: ${telefono}

(Envié también un formulario desde la web de ABC Uniformes)
      `.trim();

      // Tu número de WhatsApp en formato internacional: 54 + 11 + número
      const phone = "541135078079"; // 011 3507 8079
      const waUrl = `https://wa.me/${phone}?text=${encodeURIComponent(
        whatsappMessage
      )}`;

      window.open(waUrl, "_blank");

      setSent(true);
      formEl.reset();
    } catch (err) {
      console.error(err);
      alert("No se pudo enviar el formulario. Revisá la configuración de EmailJS.");
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
              Adjuntar archivo (opcional: logo, listado de prendas, etc.)
            </label>
            <input
              className="file"
              type="file"
              name="attachment"
            />

            <button className="btn" type="submit" disabled={loading}>
              {loading ? "Enviando..." : "Enviar formulario"}
            </button>
          </form>
        ) : (
          <p>
            <strong>¡Gracias!</strong> Tu consulta fue enviada correctamente.
            Te vamos a responder por mail o WhatsApp.
          </p>
        )}
      </div>
    </div>
  );
}