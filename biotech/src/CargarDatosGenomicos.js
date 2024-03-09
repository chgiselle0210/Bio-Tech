import React, { useEffect, useState } from 'react';

const CargarDatosGenomicos = () => {
    const [data, setData] = useState(null);
    const [datosGenomicos, setDatosGenomicos] = useState(null); // Definimos datosGenomicos y setDatosGenomicos aquí

    useEffect(() => {
        // Los datos obtenidos de esta URL son solo datos de prueba y no son relevantes para la biotecnología.
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => setData(json.slice(0, 2))); 
    }, []);

    const handleFileUpload = event => {
        const fileReader = new FileReader();
        fileReader.readAsText(event.target.files[0], "UTF-8");
        fileReader.onload = e => {
            setDatosGenomicos(e.target.result); // Usamos setDatosGenomicos para actualizar datosGenomicos
        };
    };

    return (
        <div>
            <h2>Cargar Datos Genómicos</h2>
            {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
            <input type="file" onChange={handleFileUpload} />
        </div>
    );
};

export default CargarDatosGenomicos;
