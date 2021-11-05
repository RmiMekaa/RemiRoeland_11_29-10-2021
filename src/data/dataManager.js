import data from '../data/data.json';

function getHousingList() {
  const HousingList = []
  data.forEach((housing) => {
    HousingList.push({
      id: housing.id,
      title: housing.title,
      cover: housing.cover,
    });
  })
  return HousingList;
}

function getHousingData(id){
  const result = data.find((housing) => housing.id === id);
  return !result ? null : result;
}

export {
  getHousingList, 
  getHousingData
};