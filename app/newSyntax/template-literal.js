import { log, logTitle } from '../WindowLogger';

export default () => {

  logTitle("Template Literal");

  const name = 'Maria';
  const surname = 'Jones';
  const age = 33;

  log('Name = ' + name + '\n' + ' Surname ' + surname + ' Age ' + age);
  log(`Name ${name}
    Surname ${surname}
    Age ${age}`);

}
