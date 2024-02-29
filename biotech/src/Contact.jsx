// Contact.js

import React from 'react';

function Contact() {
  return (
    <div className="contact-container">
      <h2>Contacto</h2>
      <p>¡Estamos encantados de escucharte!</p>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Correo electrónico:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Mensaje:</label>
          <textarea id="message" name="message" rows="4" required></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
      <div className="contact-info">
        <p>Puedes encontrarnos en:</p>
        <ul>
          <li>Teléfono: 223-112-0109</li>
          <li>Correo electrónico: biotech@tech.com</li>
          <li>Dirección: Utch Ti</li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;
