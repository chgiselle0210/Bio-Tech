import React, { useState, useEffect } from 'react';

const DataVisualization = () => {
  const [genomicData, setGenomicData] = useState([]);
  const [error, setError] = useState(null); // Estado para manejar errores

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://sheets.googleapis.com/v4/spreadsheets/{SHEET_ID}/values/{SHEET_NAME}?key={API_KEY}");
        if (!response.ok) {
          throw new Error('No se pudieron obtener los datos genómicos');
        }
        const data = await response.json();
        // La estructura de la llamada a la api
        
        const datos = data.values.slice(1).map((fila, index) => ({
          id: index + 1,
          gen: fila[0], 
        }));
        setGenomicData(datos);
      } catch (error) {
        console.error('Error al cargar datos genómicos:', error);
        setError('No se pudieron obtener los datos genómicos');
      }
    };

    fetchData();
  }, []); // Se ejecuta solo una vez al montar el componente
//al interactuar con la API de Google Sheets, espero recibir una respuesta que contenga los datos que necesito de mi hoja de cálculo. Esta respuesta generalmente consistirá en datos estructurados que reflejen la información almacenada en la hoja de cálculo consultada. Por ejemplo, si estoy solicitando información sobre ventas, esperaría recibir una lista de objetos donde cada uno representa una venta y contiene detalles como el nombre del producto vendido, la cantidad, el precio, etc.
  return (
    <div className="data-visualization">
      <h2>Visualización de Datos Genómicos</h2>
      {error && <p>{error}</p>}
      <ul>
        {genomicData.map(item => (
          <li key={item.id}>{item.gen}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataVisualization;
