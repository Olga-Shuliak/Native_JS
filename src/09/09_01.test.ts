
type UserType ={
  name: string,
  age: number,
  address: {title:string}
}

function icreaseAge(u:UserType) {
  u.age++;
}

test('reference test', ()=> {

  const user = {
    name: 'Olia',
    age: 36,
    address: {title: 'Minsk'}
  }

  icreaseAge(user);

  expect(user.age).toBe(37)

  const superman = user;
  superman.age = 1000;


  expect(user.age).toBe(1000)

})

test('array test', ()=> {

  const users = [{
    name: 'Olia',
    age: 35
  },
    {
      name: 'Leonid',
      age: 37
    }
      ]
  const admins = users

  admins.push({name: 'Bandit', age: 10})


  expect(users[2]).toEqual({name: 'Bandit', age: 10})

})

test('reference test', ()=> {

  const user = {
    name: 'Olia',
    age: 36,
    address: {title: 'Minsk'}
  }

  const user2 = {
    name: 'Sveta',
    age: 9,
    address: user.address
  }

  user2.address.title = 'Pekin';

  expect(user.address.title).toBe('Pekin')

})

test('sort array test', ()=> {

  let letters = ['c', 'd', 'a', 'z', 'e']

  letters.sort()

  expect(letters).toEqual(['a','c','d','e','z'])

})
