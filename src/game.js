/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
export default function sortByKeys(data, keys) {
  const sortedByParamsArr = [];
  const unsortedArr = [];
  let result = [];

  for (const key in keys) {
    sortedByParamsArr.push({ key: keys[key], value: data[keys[key]] });
  }

  for (const prop in data) {
    if (!keys.includes(prop)) {
      unsortedArr.push({ key: prop, value: data[prop] });
    }
  }

  unsortedArr.sort((a, b) => ((a.key > b.key) ? 1 : -1));
  result = sortedByParamsArr.concat(unsortedArr);

  return result;
}
