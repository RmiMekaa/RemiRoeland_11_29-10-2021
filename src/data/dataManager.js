import data from '../data/data.json';

/**
 * Return the full list of housings in the form of simplified object containing id, title and cover
 *
 * @return  {Array.<Object>}
 */
function getHousingList() {
  const housingList = []
  data.forEach((housing) => {
    housingList.push({
      id: housing.id,
      title: housing.title,
      cover: housing.cover,
    });
  })
  return housingList;
}

/**
 * Return the data of one housing
 *
 * @param   {Number|String}  id  Requested housing id
 *
 * @return  {Object}      Housing data
 */
function getHousingData(id) {
  const result = data.find((housing) => housing.id === id);
  return !result ? null : result;
}

export {
  getHousingList,
  getHousingData
};