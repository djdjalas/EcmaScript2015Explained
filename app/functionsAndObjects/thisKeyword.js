import { log, logTitle } from '../WindowLogger';

export default function(){
  logTitle('This Keyword');

  // const person = {
  //   name: 'Alex',
  //   cars: ['Ferrari', 'Aston Martin', 'Range Rover'],
  //   displayProfile : function(){
  //     log(JSON.stringify(this));
  //     this.cars.forEach(function(car) {
  //       log(`${this.name} drives ${car}`);
  //     }.bind(this));
  //   }
  // }

  // const person = {
  //   name: 'Alex',
  //   cars: ['Ferrari', 'Aston Martin', 'Range Rover'],
  //   displayProfile : function(){
  //     log(JSON.stringify(this));
  //     const self = this;
  //     this.cars.forEach(function(car) {
  //       log(`${self.name} drives ${car}`);
  //     });
  //   }
  // }

  const person = {
    name: 'Alex',
    cars: ['Ferrari', 'Aston Martin', 'Range Rover'],
    displayProfile : function(){
      log(JSON.stringify(this));
      this.cars.forEach(( car ) => {
        log(`${this.name} drives ${car}`);
      });
    }
  }

  person.displayProfile();

}
