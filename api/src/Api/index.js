export  const getAllPlanet = (callback) => {
    fetch("https://swapi.co/api/planets/")
        .then(responce => responce.json())
        .then(data => callback(data));
};

