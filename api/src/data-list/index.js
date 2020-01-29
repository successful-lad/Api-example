import React, {useState, useEffect } from "react";
import * as Api from "../Api";
import "./styles.scss";

const DataList = () => {
  const { getAllPlanet } = Api;

  const [asyncData, setAsyncData] = useState();

    useEffect( () =>{
        getAllPlanet(setAsyncData);
    }, []);

    return (
        <div className="data-list">
            <ul>
                {asyncData ? asyncData.results.map( item => (
                    <li key={item.name}>{item.name}</li>
                )) :
                  "Не подгрузилось Еще"
                }
            </ul>
        </div>
    )
};

export default DataList;