import React, { useEffect, useState } from "react";
import * as Api from "../Api";

import "./styles.scss";

const RandomPlanet = () => {
  const { getPlanet } = Api;

  const [infoPlanet, setInfoPlanet] = useState();
  const [count, setCount] = useState();

  useEffect(()=>{
    let id = Math.floor(Math.random()*25) + 1;
    getPlanet(id, setInfoPlanet)
    // setCount( +1);
  }, [count]);

  console.log(infoPlanet);
  return (
    <div className="random-planet">
      <div className="random-planet__img-block">
        <img src="" alt=""/>
      </div>
      <div className="random-planet__planet-info">
        { infoPlanet ? (
        <ul>
          <li>{infoPlanet.name}</li>
          <li>Population {infoPlanet.population}</li>
          <li>Rotation Period {infoPlanet.rotation_period}</li>
          <li>Diameter {infoPlanet.diameter}</li>
        </ul>
        ): ("идет загрузка")}
      </div>
    </div>
  )
};

export default RandomPlanet;