import {StudentType} from '../02/02';
import {addSkill, doesStudentLiveIn, makeStudentActive} from './03';

let student: StudentType;
beforeEach(() => {
  student = {
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
      }
    ]
  }
})

test('new tech skill should be added to student', () => {
  expect(student.technologies.length).toBe(3);

  addSkill(student, "React");

  expect(student.technologies.length).toBe(4);
  expect(student.technologies[3].title).toBe("React");
  //id просто определено
  expect(student.technologies[3].id).toBeDefined();
})

test('student should be made active', () => {
  makeStudentActive(student);

  expect(student.isActive).toBe(true);
})

test('does student live in the city?', () => {

  let result1 = doesStudentLiveIn(student, "Moscow");
  let result2 = doesStudentLiveIn(student, "Minsk");

  expect(result1).toBe(false);
  expect(result2).toBe(true);
})
