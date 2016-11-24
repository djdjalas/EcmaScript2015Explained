import { log, logTitle } from '../WindowLogger';

export default () => {
  logTitle('Promises');

  const promise = new Promise((resolve, reject) => {
    setTimeout(()=> {
      resolve("Data back from server");
    }, 3000);

    setTimeout(() => {
      reject("No Data back from server");
    }, 4000);
  });

  promise.then((response) => {
    log(response);
  }).catch((error) => {
    log(error);
  });



};
