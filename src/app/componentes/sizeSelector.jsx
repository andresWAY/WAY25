'use client';

import { useState } from 'react';

export default function SizeSelector() {
  const [tallaSeleccionada, setTallaSeleccionada] = useState('');
  const [form, setForm] = useState({ nombre: '', correo: '' });

  const handleSelect = (talla) => {
    setTallaSeleccionada(talla);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch('/api/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nombre: form.nombre,
        correo: form.correo,
        talla: tallaSeleccionada,
      }),
    });

    if (res.ok) {
      alert('¡Formulario enviado con éxito!');
      setForm({ nombre: '', correo: '' });
      setTallaSeleccionada('');
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
    <div className="size-container">
      <div className="size-buttons">
        {['S', 'M', 'L', 'XL'].map((t) => (
          <button
            key={t}
            className={`size-button ${tallaSeleccionada === t ? 'active' : ''}`}
            onClick={() => handleSelect(t)}
          >
            {t}
          </button>
        ))}
      </div>

      {tallaSeleccionada && (
  <>
    {/* <div className="size-selected">
      Has seleccionado la talla: <strong>{tallaSeleccionada}</strong>
    </div> */}

    <form className="size-form" onSubmit={handleSubmit}>

       <input
        type="text"
        name="talla"
        value={`talla ${tallaSeleccionada}`}
        readOnly
      />
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
  </>
)}

    </div>
  );
}
