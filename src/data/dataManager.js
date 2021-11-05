import data from '../data/data.json';

function getHousingData(id){
  const result = data.find((housing) => housing.id === id);
  return !result ? null : result;
}

export default getHousingData;