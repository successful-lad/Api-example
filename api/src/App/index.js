import React from 'react';
import DataList from "../data-list";
import Header from "../Header";
import RandomPlanet from "../random-planet";

import './styles.scss';

const App = () => {

    return (
        <div className="app">
          <Header/>
          <RandomPlanet/>
          <DataList/>
        </div>
    );
};

export default App;
