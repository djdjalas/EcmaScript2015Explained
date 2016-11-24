import add from './math';
import pi from './pi';
import Person from './Person';
import {log, logTitle} from '../../WindowLogger';

export default function(){
  logTitle('Single Default Exports');
  log(add(10, 90));
  log(pi);
  var person = new Person();
  log(person.getName());
}
