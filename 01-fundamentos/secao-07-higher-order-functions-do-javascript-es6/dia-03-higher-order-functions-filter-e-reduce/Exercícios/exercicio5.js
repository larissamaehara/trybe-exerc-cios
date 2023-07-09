/* eslint-disable no-undef */
/* eslint-disable no-return-assign */
// O index 0 do array `students` equivale ao index 0 do array `grades`
const students = ['Pedro Henrique', 'Miguel', 'Maria Clara']
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]]

const studentAverage = () => {
  return nameAndAverage = students.map((student, index) => (
    {
      name: student,
      average: (grades[index].reduce((acc, curr) => acc + curr, 0) / grades[index].length)
    }
  ))
}
console.log(studentAverage())
