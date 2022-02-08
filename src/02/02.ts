type MyCityType = {
  title: string
  country: string
}
type MyAddressType = {
  streetTitle: string
  city: MyCityType
}
type TechType = {
  id: number
  title: string
  isLearn: boolean
}
type StudentType = {
  id: number
  name: string
  age: number
  isActive: boolean
  address: MyAddressType
  technologies: Array<TechType>
  // technologies: TechType[]

}

const student: StudentType = {
  id: 1,
  name: 'Olia',
  age: 35,
  isActive: false,
  address: {
    streetTitle: 'Russyanova 13',
    city: {
      title: 'Minsk',
      country: 'Belarus'
    }
  },
  technologies: [
    {
      id: 1,
      title: 'HTML',
      isLearn: true
    },
    {
      id: 2,
      title: 'CSS',
      isLearn: true
    },
    {
      id: 3,
      title: 'JS',
      isLearn: true
    },
    {
      id: 4,
      title: 'React',
      isLearn: false
    }
  ]
}

console.log(student.name);
console.log(student.address.city.country);
console.log(student.technologies[3].title);




