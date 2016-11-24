import { log, logTitle } from '../WindowLogger';

export default function(){
  logTitle("Const");

  // const name = "Maria";
  // log(name);
  //
  // name = 1;
  // log(name);
  //
  // name = {
  //   name : "MARIA"
  // }
  //
  // log(JSON.stringify(name));

  const add = function(n1, n2) {
    log(n1 + n2);
  }

  add(2,2);

  // add = 'Maria';

  // i++;
  // i = i + 1;
  // let keyword;

  // function add(n1, n2){
  //   log(n1 + n2);
  // }
  //
  // add(2,2);
  //
  // add = function(n1) {
  //   log(n1 - 100);
  // }
  //
  // add(2,2);
  //
  // add = 'Maria';
  //
  // log(add);

}
