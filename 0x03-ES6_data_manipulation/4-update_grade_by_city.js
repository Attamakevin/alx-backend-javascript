/* eslint-disable no-param-reassign */
/* eslint-disable no-prototype-builtins */
export default function updateStudentGradeByCity(list, city, newGrade) {
  return list
    .filter((obj) => obj.location === city)
    .map((student) => {
    //   console.log(newGrade);
