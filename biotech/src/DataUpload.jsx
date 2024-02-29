// DataUpload.js
import React, { useState } from 'react';

const DataUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const uploadedFile = e.target.files[0];
    setFile(uploadedFile);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Procesar el archivo
    console.log('Archivo subido:', file);
  };

  return (
    <div className="data-upload">
      <h2>Cargar Datos Genómicos</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} />
        <button type="submit">Subir Archivo</button>
      </form>
    </div>
  );
};

export default DataUpload;
