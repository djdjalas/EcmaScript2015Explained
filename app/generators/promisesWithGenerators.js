import { log, logTitle } from '../WindowLogger';
import { coroutine as co } from 'bluebird';

export default function(){
  logTitle('Promises with Generators');

  const getRandomNumberPromise = new Promise((resolve, reject) =>{
    setTimeout(() => {
      const randomNumber = Math.floor(Math.random() * 10 ) + 1;
      log(randomNumber);
      resolve(randomNumber);
    }, 2000);
  });

  // const getJokesPromise = (n) => {
  //   const jokesPromise = fetch(`http://api.icndb.com/jokes/random/${n}`);
  //   return jokesPromise;
  // }

  const getJokesPromise = n => fetch(`http://api.icndb.com/jokes/random/${n}`);

  // getRandomNumberPromise.then( number => {
  //   getJokesPromise(number).then(jokesResponse => {
  //     jokesResponse.json().then(jokes => {
  //       const { value : jokesArray } = jokes;
  //       jokesArray.forEach(joke => log(joke.joke));
  //     });
  //   });
  // });

  co(function* (){
    const number = yield getRandomNumberPromise;
    const jokesResponse = yield getJokesPromise(number);
    const jokes = yield jokesResponse.json();
    const { value : jokesArray } = jokes;
    jokesArray.forEach(joke => log(joke.joke));
  })();

}
