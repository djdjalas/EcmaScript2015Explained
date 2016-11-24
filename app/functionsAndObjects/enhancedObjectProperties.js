import { log, logTitle } from '../WindowLogger';

export default function(){

  logTitle("Enhanced Object Properties");

  const brand = 'Bran';

  const calculator = (name, theBrand) => {
    return {
      name,
      add(n1, n2) {
        return n1 + n2
      },
      [`${brand}d`] : theBrand
    }
  }

  const calc = calculator('super calc','casio');
  log(calc.name);
  log(calc.add(3,3));
  log(calc.Brand);

}
