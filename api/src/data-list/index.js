import React, {useState, useEffect } from "react";
import * as Api from "../Api";
import "./styles.scss";

const DataList = () => {
    const [dataObj, setDataObj] = useState();
    useEffect( () => {
        Api.getAllPlanet(setDataObj)
    }, []);
    return (
        <div className="data-list">
            <ul>
                {dataObj ? dataObj.results.map( item => (
                    <li>{item.name}</li>
                )) :
                  "Не подгрузилось Еще"
                }
            </ul>
        </div>
    )
};

export default DataList;