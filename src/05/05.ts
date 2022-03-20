export type ManType = {
  name: string
  age: number
}


const people: Array<ManType> = [
  {name: 'Andrey Ivanov', age: 33},
  {name: 'Ivan Petrov', age: 24},
  {name: 'Dmitriy Sidorov', age: 18}
]

const transformation = (man: ManType) => {
  return {
    stack: ['css, html', 'js', 'tdd', 'react'],
    firstName: man.name.split(' ')[0],
    lastName: man.name.split(' ')[1]
  }
}
//короткая запись
// const transformation = (man: ManType) => ({
//     stack: ['css, html', 'js', 'tdd', 'react'],
//     firstName: man.name.split(' ')[0],
//     lastName: man.name.split(' ')[1]
//   })

const dev = people.map(transformation)

export const dev1 = people.map(man => ({
     stack: ['css, html', 'js', 'tdd', 'react'],
     firstName: man.name.split(' ')[0],
     lastName: man.name.split(' ')[1]
   }))


// console.log(dev1);

const messages = people.map(( man: ManType) => {
  // если надо вернуть объекты
  // return {
  //   phrase: `Hello, ${man.name.split(' ')[0]!}`
  // }
  return `Hello, ${man.name.split(' ')[0]!}`
})
    //короткая запись
//const messages1 = people.map(man => `${man.name.split(" ")[0]}, welcome to hte club!`)

