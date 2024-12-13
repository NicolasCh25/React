import ecu from './ecuavoly.jpg';
import fut from './futbol.avif';
import bas from './basquet.jpeg';


import './App.css';

function App() {
  return (
    
    <div className="App">
      <header>
      <h1>Datos Personales</h1>
      <p><strong>Nombre:</strong> Nicolás Chiguano</p>
      <p><strong>Dirección:</strong> Quito-La Tola</p>
      <p><strong>Teléfono:</strong> +593 984427131</p>
      <p><strong>Correo Electrónico:</strong> nicolas.chiguano@epn.edu.ec</p>

      <h2>Lista de Estudios Realizados</h2>
      <div className="lis1">
      <ol>
        <li>Introducción a la Programación: Bases de lógica, algoritmos y lenguajes de programación como Python, Java o C++.</li>
        <li>Matemáticas Discretas: Fundamentos matemáticos esenciales para el diseño de software.</li>
        <li>Estructuras de Datos y Algoritmos: Diseño, implementación y optimización de estructuras como pilas, colas, árboles y gráficos.</li>
      </ol>
      </div>

      <h2>Lista de Herramientas Utilizadas</h2>
      <div className="lis2">
      <ul>
        <li>Visual Studio Code (VS Code): Muy popular entre desarrolladores, es ligero y tiene muchas extensiones para diferentes lenguajes de programación (JavaScript, Python, C++, etc.).</li>
        <li>IntelliJ IDEA: Ideal para Java, Kotlin y otros lenguajes JVM. Viene con herramientas de análisis y depuración potentes.</li>
        <li>NetBeans: También utilizado para Java, PHP y HTML5.</li>
      </ul>
      </div>

      <h2>Galería de Deportes Favoritos</h2>
      <div>
        <div>
        <p>Fútbol</p>
          <img src={fut} className="futbol" alt="Deporte 1" />
        </div>
        <div>
        <p>Ecuavoley</p>
          <img src={ecu} className="ecua" alt="Deporte 2" />
        </div>
        <div>
        <p>Basket</p>
          <img src={bas} className="basq" alt="Deporte 3" />
        </div>
      </div>
      </header>
    </div>
  );
}

export default App;
