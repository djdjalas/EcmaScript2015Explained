import { log, logTitle } from '../WindowLogger';

export default function(){
  logTitle('Sets');

  // const names = new Set()
  //   .add('Anna')
  //   .add('Alex')
  //   .add('John')
  //   .add('Ismail')
  //   .add('Mandela');

  const namesArray = ['Anna', 'Alex', 'John',
   'Ismail', 'Mandela', null, {}, ' ', 'Nolito'];

  const names = new Set(namesArray);

  log(`Names size = ${names.size}`);
  const isMadelaDeleted = names.delete('Mandela');
  log(isMadelaDeleted);

  log(`Names size = ${names.size}`);

  names.forEach(name => log(name));

  const doesNamesContainsAlex = names.has('lex');
  log(`is alex in names = ${doesNamesContainsAlex}`);

  const namesToArray = [...names];
  log(namesToArray.length);

  const numbers = [1,1,2,3,4,5,5,55,5,5,5,5,5,5];
  const removeDuplicates = [...new Set(numbers)];
  log(removeDuplicates);



}
