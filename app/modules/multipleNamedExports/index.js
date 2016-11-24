import {add as addition, mod, subtract, pi as PI} from './math';
import {log, logTitle} from '../../WindowLogger';

export default function(){
  logTitle('Multiple Named Exports')
  log(addition(10,10));
  log(mod(10,10));
  log(subtract(10,10));
  log(PI);
}
