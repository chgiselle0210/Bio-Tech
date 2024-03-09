import React from 'react';

const Contacto = () => {
    return (
        <div>
            <h2>Contacto</h2>
            <p>Para cualquier consulta, no dudes en contactarnos a través de este formulario:</p>
            <form>
                <label>
                    Nombre:
                    <input type="text" name="name" />
                </label>
                <label>
                    Correo electrónico:
                    <input type="email" name="email" />
                </label>
                <label>
                    Mensaje:
                    <textarea name="message" />
                </label>
                <input type="submit" value="Enviar" />
            </form>
            <p>También puedes contactarnos directamente a través de nuestro correo electrónico: info@biotech.com</p>
        </div>
    );
};

export default Contacto;
