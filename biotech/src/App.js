import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Contacto from './Contacto';
import CargarDatosGenomicos from './CargarDatosGenomicos';
import ColaboracionProyectos from './ColaboracionProyectos';
import VisualizacionDatosGenomicos from './VisualizacionDatosGenomicos';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
        <h1>BIO-TECH</h1>
          <nav>
            <ul>
                <li><Link to="/contacto">Contacto</Link></li>
                <li><Link to="/cargar-datos-genomicos">Cargar Datos Genómicos</Link></li>
                <li><Link to="/colaboracion-proyectos">Colaboración en Proyectos de Investigación</Link></li>
                <li><Link to="/visualizacion-datos-genomicos">Visualización de Datos Genómicos</Link></li>
            </ul>
          </nav>

          <Routes>
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/cargar-datos-genomicos" element={<CargarDatosGenomicos />} />
            <Route path="/colaboracion-proyectos" element={<ColaboracionProyectos />} />
            <Route path="/visualizacion-datos-genomicos" element={<VisualizacionDatosGenomicos />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
