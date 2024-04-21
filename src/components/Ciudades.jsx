import React from "react";
import ClimaCiudad from "./ClimaCiudad";
import { useState } from "react";

function Ciudades() {
  const lstCiudades = [
    "Buenos Aires,AR",
    "Cancún,MX",
    "Yakutsk,RU",
    "Miami,US",
    "Madrid,ES",
    "Distrito de Lisboa,PT",
    "Rio de Janeiro,BR",
    "Roma,RO",
  ];
  const [ciudadSeleccionada, setCiudadSeleccionada] = useState(null);

  const cityClick = (ciudad) => {
    setCiudadSeleccionada(ciudad);
  };

  return (
    <div className="aa">
      <div>
        <h2>Listado de Ciudades</h2>
        <ul>
          {lstCiudades.map((c, index) => (
            <li className="c-pointer" key={index} onClick={() => cityClick(c)}>
              {c}
            </li>
          ))}
        </ul>
      </div>
      {ciudadSeleccionada && <ClimaCiudad ciudad={ciudadSeleccionada} />}
    </div>
  );
}

export default Ciudades;
