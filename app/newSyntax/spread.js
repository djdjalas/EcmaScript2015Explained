import { log, logTitle } from '../WindowLogger';

export default function(){

  logTitle("Spread Operator ...");

  const csStudents = ['Matt', 'Antonio', 'Saeed'];
  const mathsStudents = ['Alex', 'Phillipa'];

  const studentsFromCollege = [...csStudents, ...mathsStudents, 'Mohammado'];
  log(studentsFromCollege);

  const name = 'Aisha';
  const nameToArray = [...name];

  log(nameToArray.length);

  const addNumbers = function(n1, n2, n3) {
    return n1 + n2 + n3;
  }

  const numbers = [2, 4, 99];
  const result = addNumbers(...numbers);
  log(result);

  // const obj = {
  //   name: 'Aisha'
  // }
  //
  // const copyobj = {...obj};
}
