import { log, logTitle } from '../WindowLogger';

export default () => {

  logTitle('Promises.all');

  const namesPromise = new Promise((resolve, reject) => {
    const names = ['Alex', 'Anna', 'Maria'];
    setTimeout(()=> {
      reject('oops there was an error');
    }, 2000);
    setTimeout(()=> {
      resolve(names)
    }, 1000);
  });

  const surnamesPromise = new Promise((resolve, reject) => {
    const surnames = ['Utterainer', 'Jones', 'Costa'];
    setTimeout(()=> {
      resolve(surnames)
    }, 3000);
  });

  Promise.all([namesPromise, surnamesPromise]).then(data => {
    const [n, s] = data;
    log(n);
    log(s);
  }, err => {
    log(err);
  })

};
