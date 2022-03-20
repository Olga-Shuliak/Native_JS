import {CityType} from '../02/02_02';
import {createGratingMessages, getStreetsTitles, getStreetsTitlesOfGovernmentBuildings} from './05_02';


let city: CityType;

beforeEach(() => {
  city = {
    title: "New York",
    houses: [
      {
        id: 1,
        buildedAt: 2012,
        repaired: false,
        address: {number: 100, street: {title: "White street"}}
      },
      {
        id: 2,
        buildedAt: 2008,
        repaired: false,
        address: {number: 100, street: {title: "Happy street"}}
      },
      {
        id: 3,
        buildedAt: 2020,
        repaired: false,
        address: {number: 101, street: {title: "Happy street"}}
      }
    ],
    governmentBuildings: [
      {
        type: "HOSPITAL",
        budget: 200000,
        staffCount: 200,
        address: {street: {title: "Central Str"} }
      },
      {
        type: 'FIRE-STATION',
        budget: 500000,
        staffCount: 1000,
        address: {number: 21, street: {title: "South Str"} }
      }],
    citizensNumber: 1000000
  }
})

test('list of streets titles of government buildings', () => {

  let streetsNames = getStreetsTitlesOfGovernmentBuildings(city.governmentBuildings)

  expect(streetsNames.length).toBe(2);
  expect(streetsNames[0]).toBe('Central Str');
  expect(streetsNames[1]).toBe('South Str');
})

test('list of streets titles', () => {

  let streetsTitles = getStreetsTitles(city.houses)

  expect(streetsTitles.length).toBe(3);
  expect(streetsTitles[0]).toBe('White street');
  expect(streetsTitles[1]).toBe('Happy street');
  expect(streetsTitles[2]).toBe('Happy street');
})

test('create grating messages for street', () => {

  let messages = createGratingMessages(city.houses);

  expect(messages.length).toBe(3);
  expect(messages[0]).toBe('Hello people from White street');
  expect(messages[0]).toBe('Hello people from White street');
  expect(messages[0]).toBe('Hello people from White street');
})
