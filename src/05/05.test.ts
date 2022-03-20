import {ManType} from './05';

let people: Array<ManType> = []

beforeEach(() => {
  people = [
    {name: 'Andrey Ivanov', age: 33},
    {name: 'Ivan Petrov', age: 24},
    {name: 'Dmitriy Sidorov', age: 18}
  ]
})

test('should get array of messages', () => {
  const messages1 = people.map(man => `${man.name.split(" ")[0]}, welcome to hte club!`)

  expect(messages1.length).toBe(3);
  expect(messages1[0]).toBe('Andrey, welcome to hte club!');
  expect(messages1[1]).toBe('Ivan, welcome to hte club!');
  expect(messages1[2]).toBe('Dmitriy, welcome to hte club!');
})
