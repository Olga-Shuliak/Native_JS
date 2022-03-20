import {GovernmentBuildingsType, HousesType} from '../02/02_02';

export const getStreetsTitlesOfGovernmentBuildings = (buildings: Array<GovernmentBuildingsType>) => {
  return buildings.map(b => b.address.street.title)
}

export const getStreetsTitles = (houses: Array<HousesType>) => {
  return houses.map(h => h.address.street.title)
}

export const createGratingMessages = (houses: Array<HousesType>) => {
  return houses.map(s => `Hello people from ${s.address.street.title}`)
}
