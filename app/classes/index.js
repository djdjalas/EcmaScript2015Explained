import { log, logTitle } from '../WindowLogger';
import Person from './Person';
import Dog from './Dog';

export default () => {

  logTitle('Classes');

  Person.getObjectType();
  const alexName = Person.upperCasePersonName('alex');
  log(alexName);

  const person = new Person('Anna', 29);
  person.toString();
  const name = person.getName();
  log(name);
  const age = person.getAge();
  log(age);

  const dog = new Dog('Booby', 'Whoof Whoof');
  dog.displayBarkSound();

}
