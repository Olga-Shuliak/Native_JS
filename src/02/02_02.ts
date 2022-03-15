export type StreetType = {
  title: string
}

export type AddressType = {
  //? не обязательно указывать
  number?: number
  street: StreetType
}

export type HousesType = {
  id?: number
  buildedAt: number
  repaired: boolean
  address: AddressType
}

export type GovernmentBuildingsType = {
  // type: string
  type: "HOSPITAL" | "FIRE-STATION"
  budget: number
  staffCount: number
  address: AddressType
}

export type CityType = {
  title: string
  houses: Array<HousesType>
  governmentBuildings: Array<GovernmentBuildingsType>
  citizensNumber: number
}
