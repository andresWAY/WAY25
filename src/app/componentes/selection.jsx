'use client';

import { useState } from 'react';

export default function Selection({ frase }) {
  const [expanded, setExpanded] = useState(false);
  const [form, setForm] = useState({ nombre: '', correo: '', fraseInput: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };



  const handleSubmit = async (e) => {
  e.preventDefault();

  const finalFrase = frase || form.fraseInput;

  try {
    const res = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nombre: form.nombre,
        correo: form.correo,
        frase: finalFrase,
      }),
    });

    if (res.ok) {
      alert('¡Formulario enviado con éxito!');
      setForm({ nombre: '', correo: '', fraseInput: '' });
      setExpanded(false);
    } else {
      const data = await res.json();
      console.error('Error en respuesta:', data);
      alert('Hubo un error al enviar el formulario. Intenta de nuevo.');
    }
  } catch (error) {
    console.error('Error de red:', error);
    alert('Hubo un error de red. Intenta de nuevo.');
  }
};



  return (
    <div className="selection-container">
      {frase ? (
        <button
          className="selection-button"
          onClick={() => setExpanded(!expanded)}
        >
          {frase}
        </button>
      ) : (
        <>
          <input
            type="text"
            name="fraseInput"
            placeholder="Escribe una frase para el botón"
            value={form.fraseInput}
            onChange={handleChange}
            className="selection-frase-input"
          />
          <button
            className="selection-button"
            onClick={() => form.fraseInput && setExpanded(true)}
            disabled={!form.fraseInput}
          >
            Usar frase personalizada
          </button>
        </>
      )}

      {expanded && (
        <form className="selection-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="nombre"
            placeholder="Tu nombre"
            value={form.nombre}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="correo"
            placeholder="Tu correo"
            value={form.correo}
            onChange={handleChange}
            required
          />
          <button type="submit">Enviar</button>
        </form>
      )}
    </div>
  );
}
