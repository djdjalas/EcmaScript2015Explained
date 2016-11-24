import { log, logTitle } from '../WindowLogger';

export default function(){

  logTitle("Maps");

  // const map = new Map()
  //   .set('name', 'Anna')
  //   .set('age', 40)
  //   .set('age', 33);

  const map = new Map([
    ['name' , 'Anna'],
    ['age', 40],
    ['age', 33],
    [null, 'null'],
    [{}, {}]
  ]);

  log(`Size ${map.size}`);
  log(`Age = ${map.get('age')}`);

  const deleteAge = map.delete('age');
  log(deleteAge);

  const deleteAgeAgain = map.delete('age');
  log(deleteAgeAgain);

  log(`Size ${map.size}`);

  map.set('favFood', 'apples');

  log(`Size ${map.size}`);

  map.forEach((key, value) => log(`${key} = ${value}`));

  for(const [ key, value ] of map){
    log(`Entry - ${key} = ${value}`);
  }

  for(const key of map.keys()){
    log(`Keys ${key}`);
  }

  for(const value of map.values()){
    log(`Value ${value}`);
  }

  map.clear();

  log(`Size ${map.size}`);


}
