import { log, logTitle } from '../WindowLogger';

export default function(){

  logTitle("Let Keyword");

  if(true){
    let pi = 3.1415;
  }

  // log(pi);

  for(let i = 0; i<10; i++){
    log(i);
  }

  // log(i);

  // VAR IS DEAD
}
