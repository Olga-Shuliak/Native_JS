import {CityType, GovernmentBuildingsType, HousesType} from '../02/02_02';


export const addMoneyToBudget = (gb: GovernmentBuildingsType,  money: number ) => {
  gb.budget += money;
}

export const repairHouse = (house: HousesType) => {
  house.repaired = true;
}

export const toFireStaff = (gb: GovernmentBuildingsType, numberToFire: number) => {
  gb.staffCount -= numberToFire;
}

export const toHireStaff = (building: GovernmentBuildingsType, numberToHire: number) => {
  building.staffCount += numberToHire;
}
export const createMessage = (city: CityType) => {
  return "Hello " + city.title + " citizens. I wont all you " + city.citizensNumber + " will be happy!"
  //alt enter
  //return `Hello ${city.title} citizens. I wont all you ${city.citizensNumber} will be happy!`
}
