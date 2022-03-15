import {CityType, GovernmentBuildingsType} from '../02/02_02';


export const demolishHousesOnTheStreet = (city:CityType, street: string) => {
city.houses = city.houses.filter( h => h.address.street.title !== 'Happy street')
}

export const getBuildingsWithStaffCountGreaterThen = (buildings: Array<GovernmentBuildingsType>, staff: number) => {
  return buildings.filter(b => b.staffCount > staff)
}
