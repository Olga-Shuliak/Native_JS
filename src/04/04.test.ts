test('should take man older then 90 years', () => {

  const ages = [18, 22, 14, 100, 90, 25];


  const predicate = (age: number) => {
    return age > 90;
  }

  // =============сокращение записи===============

  // 1. убираем слово return и скобки {}

  // const predicate = (age: number) => age > 90;

  // 2. убираем типизацию (ТС знает ее) и скобки ()

  // const predicate = age => age > 90;

  // вставляем функцию в фильтр

  // const oldAges = ages.filter(age => age > 90);

  const oldAges = ages.filter(predicate);

  expect(oldAges.length).toBe(1);
  expect(oldAges[0]).toBe(100);

})

test('should take more chip courses then 160', () => {

  const courses = [
    {title: 'CSS', prise: 100},
    {title: 'JS', prise: 200},
    {title: 'React', prise: 150}
  ]

  const chipCourses = courses.filter(courses => courses.prise < 160);

  expect(chipCourses.length).toBe(2);
  expect(chipCourses[0].title).toBe('CSS');
  expect(chipCourses[1].title).toBe('React');

})

test('get only completed tasks', () => {

  const tasks = [
    {id: 1, title: 'milk', isDone: true},
    {id: 2, title: 'bread', isDone: false},
    {id: 3, title: 'apples', isDone: true},
    {id: 4, title: 'tomatoes', isDone: false},
    {id: 5, title: 'bananas', isDone: true}
  ]

  const completedTasks = tasks.filter(tasks => tasks.isDone);

  expect(completedTasks.length).toBe(3);
  expect(completedTasks[0].title).toBe('milk');
  expect(completedTasks[1].title).toBe('apples');
  expect(completedTasks[2].title).toBe('bananas');

})

test('get only uncompleted tasks', () => {

  const tasks = [
    {id: 1, title: 'milk', isDone: true},
    {id: 2, title: 'bread', isDone: false},
    {id: 3, title: 'apples', isDone: true},
    {id: 4, title: 'tomatoes', isDone: false},
    {id: 5, title: 'bananas', isDone: true}
  ]

  const uncompletedTasks = tasks.filter(tasks => !tasks.isDone);

  expect(uncompletedTasks.length).toBe(2);
  expect(uncompletedTasks[0].title).toBe('bread');
  expect(uncompletedTasks[1].title).toBe('tomatoes');

})

