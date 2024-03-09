import React from 'react';

const ColaboracionProyectos = () => {
    return (
        <div>
            <h2>Colaboración en Proyectos de Investigación</h2>
            <form>
                <label>
                    Nombre del proyecto:
                    <input type="text" name="projectName" />
                </label>
                <label>
                    Mensaje:
                    <textarea name="message" />
                </label>
                <input type="submit" value="Enviar" />
            </form>
        </div>
    );
};

export default ColaboracionProyectos;
