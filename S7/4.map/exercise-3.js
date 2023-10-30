const cities = [{isVisited:true, name: 'Tokyo'}, {isVisited:false, name: 'Madagascar'},{isVisited:true, name: 'Amsterdam'}, {isVisited:false, name: 'Seul'}];
const citiesNames = cities.map (city => city.isVisited ? city.name + 'Visitado' :city.name);
