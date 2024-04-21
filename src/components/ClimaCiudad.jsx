import React, { useState, useEffect } from "react";

function ClimaCiudad({ ciudad }) {
  const [temperatura, setTemperatura] = useState(null);
  const [mensaje, setMensaje] = useState("");
  const [cargando, setCargando] = useState(true);
  const [styleTemp, setStyleTemp] = useState("");
  const [url, setUrl] = useState("");

  async function obtenerTemperatura(ciudad) {
    setCargando(true);
    const API_KEY = "1d7dcbbce0a11edadf01612c76ea432a";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=metric&appid=${API_KEY}`;
    setUrl(url);
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      if (data.main && data.main.temp) {
        setTemperatura(data.main.temp);
        if (data.main.temp > 25) {
          setMensaje("Hace mucho calor");
          setStyleTemp("hot");
        } else if (data.main.temp < 15) {
          setMensaje("Hace mucho frío");
          setStyleTemp("cold");
        } else {
          setMensaje("Clima Agradable");
          setStyleTemp("warm")
        }
      } else {
        setMensaje("Error al obtener la temperatura");
      }
    } catch (error) {
      console.error("Error al obtener datos:", error);
      setMensaje("Error al obtener la temperatura");
    } finally {
      setCargando(false); // Desactivar el estado de carga después de la solicitud
    }
  }

  useEffect(() => {
    obtenerTemperatura(ciudad);
  }, [ciudad]);

  return (
    <div className="pc">
      <div>
        {cargando ? (
          <p>Cargando...</p>
        ) : (
          <div style={{ textAlign: "center" }}>
            <div>
              <p className="f-20">Temperatura actual en:</p>
              <p className="f-25">
                <strong>{ciudad}</strong>
              </p>
              <p className="t-label">{`${temperatura} °C`}</p>
            </div>
            <h5 className={styleTemp}>{mensaje}</h5>
          </div>
        )}
      </div>
      <hr />
      <p>URL consultada:</p>
      <div className="o-hidden">
        <a href={url} target="_blank" rel="noreferrer">
          {url}
        </a>
      </div>
    </div>
  );
}

export default ClimaCiudad;
