
export const getAllPlanet = async (callback) => {
   let result = await fetch(("https://swapi.co/api/planets/"));
   let body = await result.json();
   callback(body);
};

export const getPlanet = async (idPlanet, callback) => {
   let result = await fetch((`https://swapi.co/api/planets/${idPlanet}`));
   let body = await result.json();
   callback(body);
};