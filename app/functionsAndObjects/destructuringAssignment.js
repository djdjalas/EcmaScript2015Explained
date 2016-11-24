import { log, logTitle } from '../WindowLogger';

export default function(){

  logTitle("Destructuring Assignment");

  const arrays = () => {
    const numbers = [1,2,3,4,5];
    // const one = numbers[0];
    // const two = numbers[1];
    // const three = numbers[2];

    const [one, , three, ...restOfNumbers] = numbers;

    log(one);
    // log(two);
    log(three);
    log(restOfNumbers);

    const getNames = () =>{
      return ['Anna', 'Alex', 'Cheryl'];
    }

    const [anna, ,cheryl] = getNames();
    log(anna);
    log(cheryl);
  }

}
