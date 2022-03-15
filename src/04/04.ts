const ages = [18, 22, 14, 100, 90, 25];

const predicate = (age: number) => {
  return age > 90;
}

const oldAges = [100] // >90





type CoursesType = {
  title: string
  prise: number
}

const courses = [
  {title: 'CSS', prise: 100},
  {title: 'JS', prise: 200},
  {title: 'React', prise: 150}
]

const chipPredicate = (courses: CoursesType) => {
  return courses.prise < 160;
}

const chipCourses = [
  {title: 'JS', prise: 200},
  {title: 'React', prise: 150}
]
