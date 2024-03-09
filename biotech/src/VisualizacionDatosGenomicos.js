import React from 'react';

const VisualizacionDatosGenomicos = ({ datosGenomicos }) => {
    return (
        <div>
            <h2>Visualización de Datos Genómicos</h2>
            {datosGenomicos && <pre>{datosGenomicos}</pre>}
        </div>
    );
};

export default VisualizacionDatosGenomicos;
