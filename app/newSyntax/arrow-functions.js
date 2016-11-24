import { log, logTitle } from '../WindowLogger';

export default function(){

  logTitle(" => Arrow functions");

  const alertMyName = () => {
    alert('Nelson');
  };

  const add =  (n1, n2) => {
    return n1 + n2;
  };

  const milesToKilometers = miles => miles * 1.60934;

  const sendEmail = message => {
    log(` ${ new Date() }
      > ${message}
    `);
  };

  alertMyName();
  log(add(300, 700));
  log(`50 Miles to Kilometers = ${milesToKilometers(50)}`);
  sendEmail("How are you today");

}
