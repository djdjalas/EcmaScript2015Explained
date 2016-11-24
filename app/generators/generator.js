import { log, logTitle } from '../WindowLogger';

export default function(){
  logTitle('Generators');

  const getNumbers = function* (){
    yield 1;
    yield 2;
    yield true;
    yield null;
    yield {
      name : 'Alex U'
    };
    return {
      done : 'hello i am done'
    }
  }

  const numbersGen = getNumbers();

  log(JSON.stringify(numbersGen.next().value));
  log(JSON.stringify(numbersGen.next().value));
  log(JSON.stringify(numbersGen.next().value));
  log(JSON.stringify(numbersGen.next().value));
  log(JSON.stringify(numbersGen.next().value));
  log(JSON.stringify(numbersGen.next().value));

  const loopNumbers = function* (numbers){
    for(let i =0; i<numbers.length; i++){
      yield numbers[i];
    }
  };

  const loopNumbersGen = loopNumbers([10,20,30,100,9999]);

  const interval = setInterval(() => {
    const next = loopNumbersGen.next();
    if(next.done) {
      log('i am done');
      clearInterval(interval);
    }else {
      log(next.value);
    }
  }, 1000);

}
