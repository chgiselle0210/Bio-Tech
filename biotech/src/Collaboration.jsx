// Collaboration.js
import React, { useState } from 'react';

const Collaboration = () => {
  const [proyecto, setProyecto] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica real para enviar mensajes de colaboración
    console.log('Proyecto:', proyecto);
    console.log('Mensaje:', mensaje);
    setEnviado(true);
  };

  return (
    <div className="collaboration">
      <h2>Colaboración en Proyectos de Investigación</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="proyecto">Nombre del Proyecto:</label>
          <input
            type="text"
            id="proyecto"
            value={proyecto}
            onChange={(e) => setProyecto(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="mensaje">Mensaje:</label>
          <textarea
            id="mensaje"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
      {enviado && <p>¡Mensaje enviado con éxito!</p>}
    </div>
  );
};

export default Collaboration;
