import { log, logTitle } from '../WindowLogger';

export default () => {
  logTitle('Jokes');

  const jokesPromise = fetch('http://api.icndb.com/jokes/random/10');
  // log(jokesPromise);
  jokesPromise.then(data => {
    // log(data);
    const jokesData = data.json();
    jokesData.then(jokes => {
      log(jokes);
      jokes.value.forEach(joke => {
        log(`ID: ${joke.id} Joke: ${joke.joke}`);
      })
    }).catch(err => {
      log(err);
    })
  }).catch(err => {
    log(err);
  })
};
