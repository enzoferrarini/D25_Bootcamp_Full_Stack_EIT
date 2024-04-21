import Ciudades from "./components/Ciudades";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
      <h1>
        La temperatura actual en tu Ciudad - <strong>Open Weather API</strong>
      </h1>
      <h4>
        <p>
          <strong>OpenWeather</strong> es una empresa que ofrece servicios de
          datos meteorológicos y climáticos a través de su API Interfaz de
          Programación de Aplicaciones. Su API proporciona acceso a información
          meteorológica en tiempo real, pronósticos del tiempo, mapas
          climáticos, datos históricos y más.
          <a
            href="https://openweathermap.org/"
            target="_blank"
            rel="noreferrer"
          >
            https://openweathermap.org/
          </a>
        </p>
        <hr />
        <p>
          <strong>Observaciones: </strong>Se modificaron los rangos para mostrar
          mensaje de temperatura.
          <br />
          Temp 0°C a 15°C (Hace mucho frío) Temp 15°C a 25°C (Clima agradable)
          Temp 25°C en adelante (Hace mucho calor)
        </p>
      </h4>
      <hr />
      <div
        style={{
          textAlign: "left",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <Ciudades />
      </div>
    </div>
  );
}

export default App;
