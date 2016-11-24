import { log, logTitle } from '../WindowLogger';

export default function(){
  logTitle('Spread On Objects');

  const personName = {
    firstName: 'Alex',
    surname: 'Untterainer',
    middleName: 'Jones'
  }

  const address = {
    city: 'London',
    postCode: 'E10'
  }

  // const person = {
  //   firstName: personName.firstName,
  //   surname: personName.surname,
  //   middleName: personName.middleName,
  //   city: address.city,
  //   postCode: address.postCode
  // }

  const person = {
    ...personName,
    ...address
  }

  log(JSON.stringify(person, null, 2));

}
